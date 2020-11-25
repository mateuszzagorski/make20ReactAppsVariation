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
        </div>
    );
}
