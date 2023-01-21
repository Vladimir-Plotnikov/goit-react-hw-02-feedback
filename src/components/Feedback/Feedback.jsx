import React from "react";
import PropTypes from 'prop-types'

const Feedback = ({ options, onleaveFeedback}) => {
    return (
        <div>
            {options.map(option=>( <button
                type="button"
                key={option}
                onClick ={()=> onleaveFeedback(option)}
            >{option}</button>))}
        </div>
 )
};

export default Feedback;

Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onleaveFeedback: PropTypes.func.isRequired 
}