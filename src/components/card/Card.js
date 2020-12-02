import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

export default function Card({ name, path, image, isOdd }) {
    return (
        <li className={isOdd}>
            <figure>
                <img src={image} alt="img01" />
                <figcaption>
                    <h3>{name}</h3>
                    <span>Opis Aplikacji</span>
                    <Link to={{ pathname: path }}>Take a look</Link>
                </figcaption>
            </figure>
        </li>
    );
}
