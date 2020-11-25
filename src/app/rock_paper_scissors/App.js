import React, { useState, useEffect } from "react";
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scissors from "./icons/Scissors";
import "./rock_paper_scissors.scss";

const choices = [
    { id: 1, name: "rock", component: Rock, losesTo: 2 },
    { id: 2, name: "paper", component: Paper, losesTo: 3 },
    { id: 3, name: "scissors", component: Scissors, losesTo: 1 },
];

// 1. handle wins and losses
// 2. determine the winner based on choices
// 3. reset the game if user want's to play again

export default function PaperRockScissors() {
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [gameState, setGameState] = useState(null); // win, loose, draw

    useEffect(() => {
        restartGame();
    }, []);

    function restartGame() {
        setGameState(null);
        setUserChoice(null);

        const randomChoice =
            choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
    }

    function handleUserChoice(choice) {
        const chosenChoice = choices.find((c) => c.id == choice);
        setUserChoice(chosenChoice);

        //determine the winner
        setGameState("win");

        if (chosenChoice.losesTo === computerChoice.id) {
            setGameState("loose");
            setLosses((losses) => losses + 1);
        } else if (computerChoice.losesTo === chosenChoice.id) {
            setGameState("win");
            setWins((wins) => wins + 1);
        } else if (computerChoice.id === chosenChoice.id) {
            setGameState("draw");
        }
    }
    function renderComponent(choice) {
        const Component = choice.component;
        return <Component />;
    }

    return (
        <div className="rock_paper_scissors-app">
            {/* information goes here */}
            <div className="info">
                <h2>Rock. Paper. Scissors</h2>

                {/* wins vs losses stats */}
                <div className="wins-losses">
                    <div className="wins">
                        <span className="number">{wins}</span>
                        <span className="text">
                            {wins === 1 ? "Win" : "Wins"}
                        </span>
                    </div>

                    <div className="losses">
                        <span className="number">{losses}</span>
                        <span className="text">
                            {losses === 1 ? "Loss" : "Losses"}
                        </span>
                    </div>
                </div>
            </div>

            {/* the popup to show win/loose/draw */}
            {gameState && (
                <div className={`game-state ${gameState}`}>
                    <div>
                        <div className="game-state-content">
                            <p>{renderComponent(userChoice)}</p>
                            {gameState === "win" && <p>Congrats! You won!</p>}
                            {gameState === "loose" && <p>Sorry! You lost!</p>}
                            {gameState === "draw" && <p>You drew!</p>}
                            <p>{renderComponent(computerChoice)}</p>
                        </div>
                        <button onClick={() => restartGame()}>
                            Play again
                        </button>
                    </div>
                </div>
            )}

            <div className="choices">
                {/* choices captions */}
                <div>You</div>
                <div />
                <div>Computer</div>

                {/* buttons for my choice */}
                <div>
                    <button
                        className="rock"
                        onClick={() => handleUserChoice(1)}
                    >
                        <Rock />
                    </button>
                    <button
                        className="paper"
                        onClick={() => handleUserChoice(2)}
                    >
                        <Paper />
                    </button>
                    <button
                        className="scissors"
                        onClick={() => handleUserChoice(3)}
                    >
                        <Scissors />
                    </button>
                </div>

                <div className="vs">vs</div>

                {/* show the computer's choice */}
                <div>
                    <button className="computer-choice">?</button>
                </div>
            </div>
        </div>
    );
}