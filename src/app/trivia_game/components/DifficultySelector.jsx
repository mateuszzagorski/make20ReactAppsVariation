import React from 'react';

export default function DifficultySelector({ difficulty, chooseDifficulty }) {
  const difficulties = [
    { id: 1, name: 'easy' },
    { id: 2, name: 'medium' },
    { id: 3, name: 'hard' },
  ];
  return (
    <div className="category-selector">
      <p>Select Difficulty</p>
      <select
        onChange={(e) => {
          chooseDifficulty(e.target.value);
        }}
      >
        {difficulties.map((difficulty, index) => (
          <option
            key={index}
            value={difficulty.name}
            dangerouslySetInnerHTML={{ __html: difficulty.name }}
          />
        ))}
      </select>
    </div>
  );
}
