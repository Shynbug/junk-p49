import React from 'react';
import TestTimer from './components/TestTimer';

function App() {
  return (
    <div>
      <h1>Stress Test</h1>
      <TestTimer question="What is 12 + 8?" onTimeUp={() => alert("Time's up!")} />
    </div>
  );
}

export default App;
