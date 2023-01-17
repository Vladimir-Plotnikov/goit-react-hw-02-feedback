import React from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (<div>
    <Feedback />
    <Statistics
      initialGood={0}
      initialNeutral={0}
      initialBad={0}
    />
  </div>
  )
}