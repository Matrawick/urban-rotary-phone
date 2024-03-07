from __future__ import annotations
from abc import ABC, abstractmethod
import copy
from datetime import datetime, timedelta
from typing import Dict
from xml.dom import InvalidStateErr


class CardDefaultValues():

    LEARNING_STEP_LIST = [1, 10]         # minutes to show the same card after getting it right
    EASY_INTERVAL =  4 * 60 * 24          # interval if card is in learning then graduates and marked as easy
    GRADUATED_INTERVAL = 1 * 60 * 24     # interval if card is in learning then graduates not as easy.
    EASY_BONUS = 1.25                    # multiplier to add when in review and marked as easy
    HARD_FACTOR = 1.2                    # multiplier to add when marked as hard
    EASY_FACTOR_INC = 0.15               # amount to adjust the easy factor when marked as easy or hard.
    LAPSE_STEP_LIST = [1, 10]            # minutes to show the same card after getting it right in lapsed state
    LAPSED_PENALTY = 0.75                # multiplier to use when assigning interval after graduated from lapse.
    INITIAL_EASY_FACTOR = 1.5            # the starting easy factor
    
    

class Card():

    def __init__(self, card_obj: Dict, card=None):
        """
        card_obj: dict. The card as it is stored in the database.
        """
        if card is None:
            self.id = card_obj.get("id")
            self.front = card_obj.get("front")
            self.back = card_obj.get("back")
            self.interval = card_obj.get("interval")
            self.easy_factor = card_obj.get("easy_factor")
            self.state_string = card_obj.get("state_string")
            self.step_index = card_obj.get("step_index")
            self.study_next_ts = card_obj.get("study_next_ts")
            self.review_interval_before_lapse = card_obj.get("review_interval_before_lapse")
            self.state = None
        else:
            self.id = card.id
            self.front = card.front
            self.back = card.back
            self.interval = card.interval
            self.easy_factor = card.easy_factor
            self.state_string = card.state_string
            self.step_index = card.step_index
            self.study_next_ts = card.study_next_ts
            self.review_interval_before_lapse = card.review_interval_before_lapse
            self.state = None
        self.setState(self.state_string)
        self.state.set_card(self)
    
    def __repr__(self) -> str:
        return f"""id: {self.id}, 
front: {self.front}, 
back: {self.back}, 
interval: {self.interval} 
easy_factor: {self.easy_factor}, 
state_string: {self.state_string}, 
step_index: {self.step_index}, 
study_next_ts: {self.study_next_ts}, 
review_interval_before_lapse: {self.review_interval_before_lapse}"""
    
    def __eq__(self, other):
        # Note that the study_next_ts is not compared. Reasoning was because the study_next_ts is created 
        if isinstance(other, Card):
            if self.id != other.id:
                return False
            elif self.interval != other.interval:
                return False
            elif self.easy_factor != other.easy_factor:
                return False
            elif self.state_string != other.state_string:
                return False
            elif self.step_index != other.step_index:
                return False
            elif self.review_interval_before_lapse != other.review_interval_before_lapse:
                return False
            else:
                return True
        return False
        
    def setState(self, state_string: str):
        if state_string == "new":
            self.state = NewCard()
        elif state_string == "learning":
            self.state = LearningCard()
        elif state_string == "review":
            self.state = ReviewCard() 
        elif state_string == "lapse":
            self.state = LapsedCard() 
        else:
            raise InvalidStateErr()

    def setCardState(self, state: str):
        self.state = State(str)
        self.state.set_card(self)
    
    def update(self, user_input):
        return self.state.update(user_input)
    
    def get_dict(self):
        return 
        
class State(ABC):
        
    def set_card(self, card):
        self.card = card
    
    def update(self) -> Card:
        pass

class NewCard(State):  
    def update(self, user_input) -> Card:
        ret_obj = copy.deepcopy(self.card)
        ret_obj.step_index = -1
        ret_obj.state_string = "learning"
        return Card(None, card=ret_obj).update(user_input)

class LearningCard(State):
    def update(self, user_input) -> Card:
        ret_obj = copy.deepcopy(self.card)

        if user_input > 0:
            ret_obj.step_index += 1
            if ret_obj.step_index >= len(CardDefaultValues.LEARNING_STEP_LIST):
                ret_obj.state_string = "review"
                ret_obj.easy_factor = CardDefaultValues.INITIAL_EASY_FACTOR
                ret_obj.step_index = None
                if user_input == 3:
                    ret_obj.interval = CardDefaultValues.EASY_INTERVAL
                else:
                    ret_obj.interval = CardDefaultValues.GRADUATED_INTERVAL
            else:
                ret_obj.interval = CardDefaultValues.LEARNING_STEP_LIST[ret_obj.step_index]
        elif user_input == 0:
            ret_obj.step_index = 0
            ret_obj.interval = CardDefaultValues.LEARNING_STEP_LIST[0]
        else:
            raise InvalidStateErr()
        
        ret_obj.study_next_ts = datetime.utcnow() + timedelta(minutes=ret_obj.interval)
        return Card(None, card=ret_obj)

class ReviewCard(State):
    def update(self, user_input) -> Card:
        ret_obj = copy.deepcopy(self.card)

        if user_input == 0:
            ret_obj.string_state = "lapse"
            ret_obj.step_index = 0
            ret_obj.interval_before_lapse = ret_obj.interval
            ret_obj.interval = CardDefaultValues.LAPSE_STEP_LIST[0]
            ret_obj.easy_factor -= CardDefaultValues.EASY_FACTOR_INC
        elif user_input == 1:
            ret_obj.interval = ret_obj.interval * CardDefaultValues.HARD_FACTOR
            ret_obj.easy_factor -= CardDefaultValues.EASY_FACTOR_INC
        elif user_input == 2:
            ret_obj.interval = ret_obj.interval * ret_obj.easy_factor
        elif user_input == 3:
            ret_obj.interval = ret_obj.interval  * ret_obj.easy_factor * CardDefaultValues.EASY_BONUS
            ret_obj.easy_factor += CardDefaultValues.EASY_FACTOR_INC
        else:
            raise InvalidStateErr()
        
        ret_obj.study_next_ts = datetime.utcnow() + timedelta(minutes=ret_obj.interval)
        return Card(None, card=ret_obj)

class LapsedCard(State):
    def update(self, user_input) -> Card:
        ret_obj = copy.deepcopy(self.card)

        if user_input > 0:
            ret_obj.step_index += 1
            if ret_obj.step_index >= len(CardDefaultValues.LAPSE_STEP_LIST):
                ret_obj.state_string = "review"
                ret_obj.interval = ret_obj.review_interval_before_lapse * CardDefaultValues.LAPSED_PENALTY
                ret_obj.step_index = None  
            else:
                ret_obj.interval = CardDefaultValues.LAPSE_STEP_LIST[ret_obj.step_index]
        elif user_input == 0:
            ret_obj.step_index = 0
            ret_obj.interval = CardDefaultValues.LAPSE_STEP_LIST[0]
        else:
            raise InvalidStateErr()
        
        ret_obj.study_next_ts = datetime.utcnow() + timedelta(minutes=ret_obj.interval)
        return Card(ret_obj)



if __name__ == "__main__":
    card_obj = {
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": None,
        "easy_factor": 1.5,
        "state": "new",
        "step_index": None,
        "study_next_ts":None,
        "review_interval_before_lapse": None
    }
    new_card = Card(card_obj=card_obj)
    # I want to be able to set the state during initialization then check it
    print(new_card.state)
    new_card.update("good")