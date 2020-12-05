import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./Routes";
import "./highlight_tabs.scss";

function HighlightTabs() {
    return (
        <Router>
            <div className="highlight_tabs-app-container">
                <div className="highlight_tabs-application">
                    <div className="browser">
                        <Header />

                        <div className="viewport">
                            <Routes />
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default HighlightTabs;
