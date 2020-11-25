import React from "react";
import { AppRoute } from "../routing/AppRoute.enum";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div>
            <Link to={{ pathname: AppRoute.home }}>Home</Link>
        </div>
    );
}
