import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

export default function Card({ name, path, image, isOdd }) {
    return (
        <li className={isOdd}>
            <figure>
                <img src={image} alt={`${name}`} />
                <figcaption>
                    <h3>{name}</h3>
                    <span>This app is currently unavailable</span>
                    {name === "Authentication" ? (
                        <Link to={{ pathname: path }} className="disabled">
                            Take a look
                        </Link>
                    ) : (
                        <Link to={{ pathname: path }}>Take a look</Link>
                    )}
                </figcaption>
            </figure>
        </li>
    );
}
