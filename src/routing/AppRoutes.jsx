import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Pomodoro from "../app/pomodoro/App";
import MarkdownEditor from "../app/markdown_editor/App";
import HighlightTabs from "../app/highlight_tabs/App";
import PaperRockScissors from "../app/rock_paper_scissors/App";
import MovingLink from "../app/moving_link/App";
import InfiniteImageGallery from "../app/infinite_image_gallery/App";
import TriviaGame from "../app/trivia_game/App";
// import Authentication from "../app/authentication/App";
// import WebSpeechAndTimers from "../app/web_speech_and_timers/App";
// import CalendarPicker from "../app/calendar_picker/App";

import { AppRoute } from "./AppRoute.enum";
import Home from "../components/Home";

export const AppRoutes = () => {
    return (
        <Switch>
            <Route path={AppRoute.home} exact component={Home} />
            <Route path={AppRoute.pomodoro} component={Pomodoro} />
            <Route path={AppRoute.markdown_editor} component={MarkdownEditor} />
            <Route path={AppRoute.highlight_tabs} component={HighlightTabs} />
            <Route
                path={AppRoute.rock_paper_scissors}
                component={PaperRockScissors}
            />

            <Route path={AppRoute.moving_link} component={MovingLink} />
            <Route
                path={AppRoute.infinite_image_gallery}
                component={InfiniteImageGallery}
            />
            <Route path={AppRoute.trivia_game} component={TriviaGame} />
            {/* <Route path={AppRoute.authentication} component={Authentication} /> */}
            {/* <Route
                path={AppRoute.web_speech_and_timers}
                component={WebSpeechAndTimers}
            /> */}
            {/* <Route path={AppRoute.calendar_picker} component={CalendarPicker} /> */}
        </Switch>
    );
};
