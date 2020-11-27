import React from "react";
import { AppRoute } from "../routing/AppRoute.enum";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Home() {
    return (
        <div>
            <span>
                <Navigation />
            </span>
            <p>
                <Link to={{ pathname: AppRoute.pomodoro }}>Pomodoro</Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.markdown_editor }}>
                    Markdown Editor
                </Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.highlight_tabs }}>
                    Highlight tabs
                </Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.rock_paper_scissors }}>
                    Paper Rock Scissors
                </Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.moving_link }}>Moving Link</Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.infinite_image_gallery }}>
                    Infinite Image Gallery
                </Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.trivia_game }}>Trivia Game</Link>
            </p>
            {/* Issues with Authentication will have to be resolve later on */}
            {/* <p>
                <Link to={{ pathname: AppRoute.authentication }}>
                    Authentication
                </Link>
            </p> */}
            <p>
                <Link to={{ pathname: AppRoute.web_speech_and_timers }}>
                    Web speech and timers
                </Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.calendar_picker }}>
                    Calendar Picker
                </Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.animated_chat_box }}>
                    Animated chat box
                </Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.multi_step_form }}>
                    Multi Step Form
                </Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.memory_matching_game }}>
                    Memory Matching Game
                </Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.drag_and_drop_math_card }}>
                    Drag and Drop Math Card
                </Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.browser }}>Browser</Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.real_time_search }}>
                    Real Time Search
                </Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.chart_the_weather }}>
                    Chart The Weather
                </Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.shopping_cart }}>
                    Shopping Cart
                </Link>
            </p>
            <p>
                <Link to={{ pathname: AppRoute.typing_test }}>Typing Test</Link>
            </p>
        </div>
    );
}
