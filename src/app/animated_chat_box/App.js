import useInterval from "@use-it/interval";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./animated_chat_box.scss";

const messages = [
    { text: "How do I get better at React?" },
    { text: "Just build something!" },
    { text: "OK! What should I build?" },
    { text: "Iono. Just Google it?" },
    { text: "Oh! This course looks cool!" },
    { text: "Send me the link?!" },
    { text: "20ReactApps.com!" },
];

export default function AnimatedChatBox() {
    const [messageToShow, setMessageToShow] = useState(0);

    useInterval(() => {
        setMessageToShow((messageToShow) => messageToShow + 1);
    }, 2000);

    return (
        <div className="animated_chat_box-app">
            <div className="walkthrough">
                {messages.map((message, index) => {
                    const even = index % 2 === 0;

                    // logic goes here
                    // are we supposed to show a typing indicator
                    if (messageToShow + 1 === index) {
                        return <Typing key={index} even={even} />;
                    }
                    // are we supposed to show this message?
                    if (index > messageToShow) return <div key={index} />;

                    return <Message key={index} message={message} />;
                })}
            </div>
        </div>
    );
}

function Typing({ even }) {
    return (
        <motion.div
            className={`typing ${even ? "is-left" : "is-right"}`}
            initial={{ rotate: 10, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
        >
            <div className="dots">
                <div />
                <div />
                <div />
            </div>
        </motion.div>
    );
}
function Message({ message }) {
    return (
        <motion.div
            className="message"
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
        >
            <div className="avatar">🐱‍🐉</div>
            <div className="text">{message.text}</div>
            <div className="avatar">👀</div>
        </motion.div>
    );
}
