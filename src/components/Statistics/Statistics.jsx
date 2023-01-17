import React from 'react';
// import PropTypes from 'prop-types'
import Feedback from 'components/Feedback/Feedback';

class Statistics extends React.Component {
            state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
    };
    handleGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good += 1,
            }
        });
    };
    handleNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral +=1
            }
        }
        )
    };
    handleBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad +1
            }
        })
    }

    render() {
        return (
                 <div>
                <h1>Statistics</h1>
                <ul>
        <li>Good:<span className='GoodValue'>{this.state.good}</span></li>
        <li>Neutral:<span className='NeutralValue'>{this.state.neutral}</span></li>
        <li>Bad:<span className='BadValue'>{this.state.bad}</span></li>
                </ul>
                 <Feedback
                    onGood={this.handleGood}
                    onNeutral={this.handleNeutral}
                    onBad={this.handleBad} /> 
</div>
    )}
}
export default Statistics;