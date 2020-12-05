import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppRoute } from "./AppRoute.enum";

import Home from "../components/home/Home";
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
import RealTimeSearch from "../app/real_time_search/App";
import ChartTheWeather from "../app/chart_the_weather/App";
import ShoppingCart from "../app/shopping_cart/App";
import TypingTest from "../app/typing_test/App";

import Navigation from "../components/navigation/Navigation";

import image1 from "../images/1.PNG";
import image2 from "../images/2.PNG";
import image3 from "../images/3.PNG";
import image4 from "../images/4.PNG";
import image5 from "../images/5.PNG";
import image6 from "../images/6.PNG";
import image7 from "../images/7.PNG";
import image8 from "../images/8.PNG";
import image9 from "../images/9.PNG";
import image10 from "../images/10.PNG";
import image11 from "../images/11.PNG";
import image12 from "../images/12.PNG";
import image13 from "../images/13.PNG";
import image14 from "../images/14.PNG";
import image15 from "../images/15.PNG";
import image16 from "../images/16.PNG";
import image17 from "../images/17.PNG";
import image18 from "../images/18.PNG";
import image19 from "../images/19.PNG";

export const routes = [
    {
        path: AppRoute.home,
        component: Home,
        name: "Home",
    },
    {
        path: AppRoute.pomodoro,
        component: Pomodoro,
        name: "Pomodoro Clock",
        image: image1,
    },
    {
        path: AppRoute.markdown_editor,
        component: MarkdownEditor,
        name: "Markdown Editor",
        image: image2,
    },
    {
        path: AppRoute.highlight_tabs,
        component: HighlightTabs,
        name: "Highlight Tabs",
        image: image3,
    },
    {
        path: AppRoute.rock_paper_scissors,
        component: PaperRockScissors,
        name: "Rock Paper Scissors",
        image: image4,
    },
    {
        path: AppRoute.moving_link,
        component: MovingLink,
        name: "Moving Link",
        image: image5,
    },
    {
        path: AppRoute.infinite_image_gallery,
        component: InfiniteImageGallery,
        name: "Infinite Image Gallery",
        image: image6,
    },
    {
        path: AppRoute.trivia_game,
        component: TriviaGame,
        name: "Trivia Game",
        image: image7,
    },
    {
        path: AppRoute.authentication,
        component: Authentication,
        name: "Authentication",
        disabled: "disabled",
        image: image8,
    },
    {
        path: AppRoute.web_speech_and_timers,
        component: WebSpeechAndTimers,
        name: "Web Speech And Timers",
        image: image9,
    },
    {
        path: AppRoute.calendar_picker,
        component: CalendarPicker,
        name: "Calendar Picker",
        image: image10,
    },
    {
        path: AppRoute.animated_chat_box,
        component: AnimatedChatBox,
        name: "Animated Chat Box",
        image: image11,
    },
    {
        path: AppRoute.multi_step_form,
        component: MultiStepForm,
        name: "Multi Step Form",
        image: image12,
    },
    {
        path: AppRoute.memory_matching_game,
        component: MemoryMatchingGame,
        name: "Memory Matching Game",
        image: image13,
    },
    {
        path: AppRoute.drag_and_drop_math_card,
        component: DragAndDropMathCard,
        name: "Drag And Drop Math Card",
        image: image14,
    },
    {
        path: AppRoute.browser,
        component: Browser,
        name: "Browser",
        image: image15,
    },
    {
        path: AppRoute.real_time_search,
        component: RealTimeSearch,
        name: "Real Time Search",
        image: image16,
    },
    {
        path: AppRoute.chart_the_weather,
        component: ChartTheWeather,
        name: "Chart The Weather",
        image: image17,
    },
    {
        path: AppRoute.shopping_cart,
        component: ShoppingCart,
        name: "Shopping Cart",
        image: image18,
    },
    {
        path: AppRoute.typing_test,
        component: TypingTest,
        name: "Typing Test",
        image: image19,
    },
];

export const AppRoutes = () => {
    return (
        <div className="app">
            <div id="outer-container">
                <Navigation />

                <main id="page-wrap" className="page-wrap">
                    <Switch>
                        {routes.map((route) => (
                            <Route
                                exact
                                path={route.path}
                                component={route.component}
                                key={route.path}
                            />
                        ))}
                    </Switch>
                </main>
            </div>
        </div>
    );
};
