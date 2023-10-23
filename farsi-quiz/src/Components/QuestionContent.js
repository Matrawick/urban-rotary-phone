
import React from 'react';
import './QuestionContent.css';

function QuestionContent(props) {
    
    const createMarkup = () => {
        return { __html: props.question };
    };

    return (
        <div dangerouslySetInnerHTML={createMarkup()} />
    )



}
export default QuestionContent;