import React from "react";
import Card from "../card/Card";
import { routes } from "../../routing/AppRoutes";

export default function CardList() {
    return (
        <>
            <ul className={`grid cs-style-1`}>
                {routes.map((route, index) =>
                    route.name === "Home" ? (
                        console.log(
                            route.name + " app is not avaialable in this view"
                        )
                    ) : (
                        <Card
                            path={route.path}
                            key={route.path}
                            name={route.name}
                            image={route.image}
                            isOdd={index % 2 ? "even" : ""}
                        />
                    )
                )}
            </ul>
        </>
    );
}
