import React, { useState, useEffect } from 'react';

export default function Scoreboard({ isCorrect, difficulty }) {

  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)

  useEffect(() => {
    if(isCorrect === null) return;
    
    if(isCorrect) {
      if(difficulty === 'hard') {
        setCorrect(score => score + 3);
      } else if (difficulty === 'medium') {
        setCorrect(score => score + 2);
      } else if (difficulty === 'easy') {
        setCorrect(score => score + 1);
      }
    } else {
      if(difficulty === 'hard') {
        setWrong(score => score + 3);
      } else if (difficulty === 'medium') {
        setWrong(score => score + 2);
      } else if (difficulty === 'easy') {
        setWrong(score => score + 1);
      }
    }
  }, [isCorrect])

  return (
    <div className="scoreboard">
      <div className="wrong">
        <strong>{wrong}</strong>
        <span>wrong</span>
      </div>
      <div className="correct">
        <strong>{correct}</strong>
        <span>correct</span>
      </div>
    </div>
  );
}
