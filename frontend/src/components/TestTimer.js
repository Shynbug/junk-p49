import React, { useState, useEffect } from 'react';

export default function TestTimer({ question, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    if (timeLeft === 0) {
      clearInterval(timer);
      onTimeUp();
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div>
      <h2>{question}</h2>
      <p>Time Left: {timeLeft}s</p>
    </div>
  );
}
