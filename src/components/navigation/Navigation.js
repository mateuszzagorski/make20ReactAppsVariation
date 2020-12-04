import React from "react";
import { AppRoute } from "../../routing/AppRoute.enum";
import { Link } from "react-router-dom";
import { push as Menu } from "react-burger-menu";
import { routes } from "../../routing/AppRoutes";
import "./navigation.scss";

export default function Navigation() {
    function showSettings(event) {
        event.preventDefault();
    }
    return (
        <>
            <Menu
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
                isOpen={false}
            >
                {routes.map((route, index) => (
                    <a
                        id={route.name}
                        href={route.path}
                        className="menu-item"
                        key={index}
                    >
                        {route.name}
                    </a>
                ))}
                {/* <a id="home" className="menu-item" href="/">
                    Home
                </a>
                <a id="about" className="menu-item" href="/about">
                    About
                </a>
                <a id="contact" className="menu-item" href="/contact">
                    Contact
                </a>
                <a onClick={showSettings} className="menu-item--small" href="">
                    Settings
                </a> */}
            </Menu>
        </>
        // <div>
        //     <Link to={{ pathname: AppRoute.home }}>Home</Link>
        // </div>
    );
}
