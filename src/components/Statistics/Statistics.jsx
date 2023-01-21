import React from 'react';
import PropTypes from 'prop-types'

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div>
                <ul>
        <li>Good:<span className='GoodValue'>{good}</span></li>
        <li>Neutral:<span className='NeutralValue'>{neutral}</span></li>
        <li>Bad:<span className='BadValue'>{bad}</span></li>
        <li>Total:<span className='TotalValue'>{total}</span></li>
        <li>Positive feedback:<span className='Positive feedback'>{positivePercentage}%</span></li>
            </ul>
        </div>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}