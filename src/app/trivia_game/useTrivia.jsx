import { useState, useEffect, useCallback } from 'react';

export default function useTrivia() {
  const [question, setQuestion] = useState(null);
  const [category, setCategory] = useState('any');
  const [difficulty, setDifficulty] = useState('easy');

  const getQuestion = useCallback(() => {
    let url = 'https://opentdb.com/api.php?amount=1';
    if (category !== 'any') url += `&category=${category}`;
    url += `&difficulty=${difficulty}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuestion(data.results[0]));
  }, [category, difficulty]);

  useEffect(() => {
    getQuestion();
  }, [getQuestion, category, difficulty]);

  return {
    question,
    category,
    setCategory,
    getQuestion,
    difficulty,
    setDifficulty,
  };
}
