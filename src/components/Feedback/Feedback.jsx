import React,{Component} from "react";

const Feedback = ({ onGood, onNeutral, onBad }) => {
    return (<div>
        <h1>Please leave feedback</h1>
        <div>
            <button type='button' onClick={onGood}>Good</button>
            <button type='button' onClick={onNeutral}>Neutral</button>
            <button type='button' onClick={onBad}>Bad</button>
        </div>
    </div > )
};

export default Feedback;