import React from 'react';
import DeckItem from './DeckItem';

const DeckList = (props) => {


    return (
        <ul>
            {props.decks.map((deck) => (
                <DeckItem 
                name={deck.name}
                num_learned={deck.num_learned}
                num_to_learn={deck.num_to_learn}
                />
            ))}
        </ul>
    );
};

export default DeckList;