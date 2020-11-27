import React, { useState } from "react";
import Tabs from "./components/Tabs";
import AddressBar from "./components/AddressBar";
import "./browser.scss";
import { useReducer } from "react";

function reducer(state, action) {
    const { browsers, activeBrowser } = state;
    const { type, payload } = action;

    if (type === "ADD") {
        const newBrowsers = [...state.browsers, ""];
        const activeBrowser = newBrowsers.length - 1;

        return {
            browsers: newBrowsers,
            activeBrowser,
        };
    }
    if (type === "CHOOSE") {
        return {
            ...state,
            activeBrowser: payload,
        };
    }
    if (type === "UPDATE") {
        const newBrowsers = [...browsers];
        newBrowsers[state.activeBrowser] = payload;
        return {
            ...state,
            browsers: newBrowsers,
        };

        // const newBrowsers = [...browsers];
        // newBrowsers[activeBrowser] = url;
        // setBrowsers(newBrowsers);
    }
    if (type === "CLOSE") {
        const oldBrowsers = [...browsers];
        const newBrowsers = oldBrowsers.filter((b, index) => index !== payload);

        const oldUrl = oldBrowsers[activeBrowser];
        const newActiveBrowser =
            activeBrowser > newBrowsers.length - 1
                ? newBrowsers.length - 1
                : newBrowsers.findIndex((b) => b === oldUrl);

        return {
            browsers: newBrowsers,
            activeBrowser: newActiveBrowser,
        };
    }
}

export default function Browser() {
    // Reducer is replacing useState
    const [state, dispatch] = useReducer(reducer, {
        browsers: ["https://learn.chrisoncode.io", "https://codepen.io"],
        activeBrowser: 0,
    });

    // state
    // const [browsers, setBrowsers] = useState([
    //   'https://learn.chrisoncode.io',
    //   'https://codepen.io',
    // ]);
    // const [activeBrowser, setActiveBrowser] = useState(0);
    // effects

    // functions here
    const chooseBrowser = (id) => dispatch({ type: "CHOOSE", payload: id });
    const addBrowser = () => dispatch({ type: "ADD" });
    const updateBrowser = (url) => dispatch({ type: "UPDATE", payload: url });
    const closeBrowser = (id) => dispatch({ type: "CLOSE", payload: id });

    // function chooseBrowser(id) {
    //   dispatch({ type: 'CHOOSE', payload: id });
    //   // setActiveBrowser(id);
    // }

    // function addBrowser() {
    //   dispatch({ type: 'ADD' });
    //   // const newBrowsers = [...browsers, ''];
    //   // setBrowsers(newBrowsers);
    //   // setActiveBrowser(newBrowsers.length - 1);
    // }

    // function updateBrowser(url) {
    //   dispatch({ type: 'UPDATE', payload: url });
    //   // const newBrowsers = [...browsers];
    //   // newBrowsers[activeBrowser] = url;
    //   // setBrowsers(newBrowsers);
    // }

    function close() {}
    // formatting or grabbing of data
    const { browsers, activeBrowser } = state;

    const url = browsers[activeBrowser];

    return (
        <div className="browser-app">
            <div className="browser">
                <Tabs
                    browsers={browsers}
                    active={activeBrowser}
                    choose={chooseBrowser}
                    add={addBrowser}
                    close={closeBrowser}
                />

                <AddressBar update={updateBrowser} url={url} />

                <div className="viewport">
                    {url ? (
                        <iframe src={url} title="Stuff" />
                    ) : (
                        <>New Tab Page </>
                    )}
                </div>
            </div>
        </div>
    );
}
