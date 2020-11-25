import React, { useState } from "react";
import Question from "./components/Question";
import CategorySelector from "./components/CategorySelector";
import DifficultySelector from "./components/DifficultySelector";
import ResultModal from "./components/ResultModal";
import Scoreboard from "./components/Scoreboard";
import useTrivia from "./useTrivia";
import "./trivia_game.scss";

export default function TriviaGame() {
    const {
        question,
        getQuestion,
        category,
        setCategory,
        difficulty,
        setDifficulty,
    } = useTrivia();
    const [isCorrect, setIsCorrect] = useState(null);

    function handleQuestionAnswered(answer) {
        const isAnswerCorrect = answer === question.correct_answer;
        setIsCorrect(isAnswerCorrect);
    }

    function handleNextQuestion() {
        setIsCorrect(null);
        getQuestion();
    }

    return (
        <div className="trivia_game-app">
            {/* show the result modal ----------------------- */}
            {isCorrect !== null && (
                <ResultModal
                    isCorrect={isCorrect}
                    question={question}
                    getQuestion={handleNextQuestion}
                />
            )}

            {/* question header ----------------------- */}
            <div className="question-header">
                <CategorySelector
                    category={category}
                    chooseCategory={setCategory}
                />
                <Scoreboard isCorrect={isCorrect} difficulty={difficulty} />
            </div>
            <div className="question-header">
                <DifficultySelector
                    difficulty={difficulty}
                    chooseDifficulty={setDifficulty}
                />
                {difficulty === "hard" && (
                    <p>Hard questions are worth 3 points</p>
                )}
                {difficulty === "medium" && (
                    <p>Medium questions are worth 2 points</p>
                )}
                {difficulty === "easy" && (
                    <p>Easy questions are worth 1 points</p>
                )}
            </div>

            {/* the question itself ----------------------- */}
            <div className="question-main">
                {question && (
                    <Question
                        question={question}
                        answerQuestion={handleQuestionAnswered}
                    />
                )}
            </div>

            {/* question footer ----------------------- */}
            <div className="question-footer">
                <button onClick={handleNextQuestion}>
                    Go to next question 👉
                </button>
            </div>
        </div>
    );
}
