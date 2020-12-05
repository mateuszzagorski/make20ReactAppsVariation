import React, { useState, useEffect, useCallback } from "react";
import { useStopwatch } from "react-timer-hook";
import { useSpeechSynthesis } from "react-speech-kit";
import "./web_speech_and_timers.scss";

export default function WebSpeechAndTimers() {
    const [timers, setTimers] = useState([
        { time: 2, text: "this is a random message" },
        { time: 5, text: "type something in" },
        { time: 8, text: "or edit text" },
    ]);
    const { seconds, isRunning, start, reset } = useStopwatch();

    const { speak, speaking, supported, voices } = useSpeechSynthesis();

    const doReset = useCallback(() => reset(), []);
    console.log(voices);

    useEffect(() => {
        const foundTimer = timers.find((timer) => timer.time === seconds);
        if (foundTimer) speak({ text: foundTimer.text });

        //check to see if seconds > the last timers time
        if (seconds > timers[timers.length - 1].time) {
            reset();
        }

        console.log(foundTimer, seconds);
    }, [seconds, timers, doReset]);

    function updateTimers(index, time, text) {
        const newTimers = [...timers];
        newTimers[index].time = time;
        newTimers[index].text = text;

        setTimers(newTimers);
    }

    function addTimer() {
        const newTimers = [...timers, { time: 10, text: "yoooo" }];
        setTimers(newTimers);
    }
    // function changeVoice(e) {
    //     console.log(e.target.value);
    // }
    if (!supported) {
        return <div>Your browser is not supported. Sorry</div>;
    }

    return (
        <div className="web_speech_and_timers-application">
            <div className="app-container">
                <h2>Talk the Talk</h2>

                <div className="timers">
                    {/* timers */}
                    {timers.map((timer, index) => (
                        <TimerSlot
                            key={index}
                            index={index}
                            timer={timer}
                            updateTimers={updateTimers}
                        />
                    ))}

                    <button className="add-button" onClick={addTimer}>
                        Add
                    </button>
                    {/* <select onChange={changeVoice} id="voiceSelect">
                        {voices.map((voice, index) => (
                            <option
                                value={voice.lang}
                                data-lang={voice.lang}
                                data-name={voice.name}
                                index={index}
                            >
                                {voice.name}
                            </option>
                        ))}
                    </select> */}
                </div>

                {/* seconds */}
                <h2>{seconds}</h2>

                {/* buttons */}
                <div className="buttons">
                    {!isRunning && (
                        <button className="start-button" onClick={start}>
                            Start
                        </button>
                    )}
                    {isRunning && (
                        <button className="stop-button" onClick={reset}>
                            Stop
                        </button>
                    )}

                    {speaking && <p> I am speaking ...</p>}
                </div>
            </div>
        </div>
    );
}

function TimerSlot({ index, timer, updateTimers }) {
    const [time, setTime] = useState(timer.time);
    const [text, setText] = useState(timer.text);

    function handleBlur() {
        updateTimers(index, time, text);
    }

    return (
        <form className="timer" key={index}>
            <input
                type="number"
                value={time}
                onChange={(e) => setTime(+e.target.value)}
                onBlur={handleBlur}
            />
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onBlur={handleBlur}
            />
        </form>
    );
}
