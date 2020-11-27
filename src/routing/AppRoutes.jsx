import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Pomodoro from "../app/pomodoro/App";
import MarkdownEditor from "../app/markdown_editor/App";
import HighlightTabs from "../app/highlight_tabs/App";
import PaperRockScissors from "../app/rock_paper_scissors/App";
import MovingLink from "../app/moving_link/App";
import InfiniteImageGallery from "../app/infinite_image_gallery/App";
import TriviaGame from "../app/trivia_game/App";
import Authentication from "../app/authentication/App";
import WebSpeechAndTimers from "../app/web_speech_and_timers/App";
import CalendarPicker from "../app/calendar_picker/App";
import AnimatedChatBox from "../app/animated_chat_box/App";

import MultiStepForm from "../app/multi_step_form/App";
import MemoryMatchingGame from "../app/memory_matching_game/App";
import DragAndDropMathCard from "../app/drag_and_drop_math_card/App";
import Browser from "../app/browser/App";
// import RealTimeSearch from "../app/real_time_search/App";
// import ChartTheWeather from "../app/chart_the_weather/App";
// import ShoppingCart from "../app/shopping_cart/App";
// import TypingTest from "../app/typing_test/App";

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
            <Route path={AppRoute.authentication} component={Authentication} />
            <Route
                path={AppRoute.web_speech_and_timers}
                component={WebSpeechAndTimers}
            />
            <Route path={AppRoute.calendar_picker} component={CalendarPicker} />

            <Route
                path={AppRoute.animated_chat_box}
                component={AnimatedChatBox}
            />
            <Route path={AppRoute.multi_step_form} component={MultiStepForm} />
            <Route
                path={AppRoute.memory_matching_game}
                component={MemoryMatchingGame}
            />
            <Route
                path={AppRoute.drag_and_drop_math_card}
                component={DragAndDropMathCard}
            />
            <Route path={AppRoute.browser} component={Browser} />
            {/* <Route path={AppRoute.real_time_search} component={RealTimeSearch} /> */}
            {/* <Route path={AppRoute.chart_the_weather} component={ChartTheWeather} /> */}
            {/* <Route path={AppRoute.shopping_cart} component={ShoppingCart} /> */}
            {/* <Route path={AppRoute.typing_test} component={TypingTest} /> */}
        </Switch>
    );
};
