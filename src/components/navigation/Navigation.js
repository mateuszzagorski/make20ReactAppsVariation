import React from "react";
import { push as Menu } from "react-burger-menu";
import { routes } from "../../routing/AppRoutes";
import "./navigation.scss";

export default function Navigation() {
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
            </Menu>
        </>
    );
}
