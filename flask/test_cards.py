from cards import Card, CardDefaultValues, NewCard, LapsedCard, LearningCard, ReviewCard
import pytest

"""
    
    (
       
        {  # Test case 1
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": None,
        "easy_factor": None,
        "state_string": "new",
        "step_index": None,
        "study_next_ts":None,
        "review_interval_before_lapse": None
    }, 
    0,
    {
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": CardDefaultValues.LEARNING_STEP_LIST[0],
        "easy_factor": None,
        "state_string": "learning",
        "step_index": 0,
        "study_next_ts": None,
        "review_interval_before_lapse": None
    }
    ),
    """
@pytest.mark.parametrize("card_obj, user_input, expected_result", [
   
     (
       
        {  # Test case 1
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": None,
        "easy_factor": None,
        "state_string": "new",
        "step_index": None,
        "study_next_ts":None,
        "review_interval_before_lapse": None
    }, 
    0,
    {
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": CardDefaultValues.LEARNING_STEP_LIST[0],
        "easy_factor": None,
        "state_string": "learning",
        "step_index": 0,
        "study_next_ts": None,
        "review_interval_before_lapse": None
    }
    ),
    ({  # Test case 2
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": None,
        "easy_factor": None,
        "state_string": "new",
        "step_index": None,
        "study_next_ts":None,
        "review_interval_before_lapse": None
    }, 
    1,
    {
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": CardDefaultValues.LEARNING_STEP_LIST[0],
        "easy_factor": None,
        "state_string": "learning",
        "step_index": 0,
        "study_next_ts": None,
        "review_interval_before_lapse": None
    }),
    ({  # Test case 3
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": None,
        "easy_factor": None,
        "state_string": "new",
        "step_index": None,
        "study_next_ts":None,
        "review_interval_before_lapse": None
    }, 
    3,
    {
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": CardDefaultValues.LEARNING_STEP_LIST[0],
        "easy_factor": None,
        "state_string": "learning",
        "step_index": 0,
        "study_next_ts": None,
        "review_interval_before_lapse": None
    }),
    ({  # Test case 4
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": 1,
        "easy_factor": None,
        "state_string": "learning",
        "step_index": 0,
        "study_next_ts":None,
        "review_interval_before_lapse": None
    }, 
    1,
    {
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": CardDefaultValues.LEARNING_STEP_LIST[1],
        "easy_factor": None,
        "state_string": "learning",
        "step_index": 1,
        "study_next_ts": None,
        "review_interval_before_lapse": None
    }),
    ({  # Test case 5
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": 1,
        "easy_factor": None,
        "state_string": "learning",
        "step_index": 0,
        "study_next_ts":None,
        "review_interval_before_lapse": None
    }, 
    0,
    {
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": CardDefaultValues.LEARNING_STEP_LIST[0],
        "easy_factor": None,
        "state_string": "learning",
        "step_index": 0,
        "study_next_ts": None,
        "review_interval_before_lapse": None
    }),
    ({  # Test case 6
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": 10,
        "easy_factor": None,
        "state_string": "learning",
        "step_index": 1,
        "study_next_ts":None,
        "review_interval_before_lapse": None
    }, 
    1,
    {
        "id": 1,
        "front": "yek",
        "back": "1",
        "interval": 1440,
        "easy_factor": 1.5,
        "state_string": "review",
        "step_index": None,
        "study_next_ts": None,
        "review_interval_before_lapse": None
    })


],
ids=[
        'new card and user_input is 0 (gets it wrong)',
        'new card and user_input is 1 (marks it right as hard)',
        'new card and user_input is 3 (marks it right as easy)',
        'learning card, user_input is 1 (marks it right as easy)',
        'learning after new card gets it wrong',
        'learning and graduating the card with hard'
        
    ])
def test_new_card(card_obj, user_input, expected_result):
    new_card = Card(card_obj=card_obj)
    updated_card = new_card.update(user_input)
    #breakpoint()
    assert updated_card == Card(card_obj=expected_result)
    assert updated_card.study_next_ts is not None
    