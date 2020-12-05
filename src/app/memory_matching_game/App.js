import React, { useState, useEffect } from "react";
import shuffle from "lodash.shuffle";
import samplesize from "lodash.samplesize";
import "./memory_matching_game.scss";

// Add the reset button after finding all the pokemons
// Possibly a shuffle of Id's would be nice - so there arent always the same pokemons available
//

// image for the pokemon
// https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png

// const pokemon = [
//   { id: 4, name: "charizard" },
//   { id: 10, name: "caterpie" },
//   { id: 77, name: "ponyta" },
//   { id: 108, name: "lickitung" },
//   { id: 132, name: "ditto" },
//   { id: 133, name: "eevee" },
// ];

let pokemonArray = [];
let chosenPokemons;
let doublePokemon;

export default function MemoryMatchingGame() {
    const [opened, setOpened] = useState([]); // using index
    const [matched, setMatched] = useState([]); // pokemon.id
    const [moves, setMoves] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getPokemons = async () => {
            await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
                .then((response) => response.json())
                .then((data) => {
                    pokemonArray = [...data.results];
                    chosenPokemons = samplesize(pokemonArray, 6);
                    chosenPokemons.forEach((pokemon, index, arr) => {
                        arr[index].id = parseInt(
                            arr[index].url.match(/\/([0-9].*)\//)[1]
                        );
                        delete arr[index].url;
                    });
                    doublePokemon = shuffle([
                        ...chosenPokemons,
                        ...chosenPokemons,
                    ]);
                });
            setIsLoading(false);
        };
        getPokemons();
    }, []);

    // check if there is a match
    // if there are 2 in the opened array, check if they match
    useEffect(() => {
        if (opened.length < 2) return;

        const firstPokemon = doublePokemon[opened[0]];
        const secondPokemon = doublePokemon[opened[1]];

        if (
            firstPokemon.name === secondPokemon.name &&
            !matched.includes(firstPokemon.id)
        )
            setMatched((matched) => [...matched, firstPokemon.id]);
    }, [opened]);

    // clear cards after 2 have been selected
    useEffect(() => {
        if (opened.length === 2) setTimeout(() => setOpened([]), 800);
    }, [opened]);

    // check if there is a winner
    useEffect(() => {
        if (chosenPokemons && matched.length === chosenPokemons.length)
            alert("you won!");
    }, [matched]);

    function flipCard(index) {
        // if same card was clicked
        if (opened.includes(index)) return;

        setMoves((moves) => moves + 0.5);
        setOpened((opened) => [...opened, index]);
    }

    return (
        <div className="memory_matching_game-app-container">
            <div className="memory_matching_game-application">
                <p>
                    {Math.floor(moves)} <strong>moves</strong>
                </p>

                <div className="cards">
                    {doublePokemon &&
                        doublePokemon.map((pokemon, index) => {
                            let isFlipped = false;

                            // do some logic to check if flipped
                            if (opened.includes(index)) isFlipped = true;
                            if (matched.includes(pokemon.id)) isFlipped = true;

                            return (
                                <PokemonCard
                                    key={index}
                                    index={index}
                                    pokemon={pokemon}
                                    isFlipped={isFlipped}
                                    flipCard={flipCard}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

function PokemonCard({ index, pokemon, isFlipped, flipCard }) {
    return (
        <button
            className={`pokemon-card ${isFlipped ? "flipped" : ""}`}
            onClick={() => flipCard(index)}
        >
            <div className="inner">
                <div className="front">
                    <img
                        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                        alt={pokemon.name}
                        width="100"
                    />
                </div>
                <div className="back">?</div>
            </div>
        </button>
    );
}
