import React, { useEffect, useState, useCallback } from "react";
import "./chart_the_weather.scss";
import GeoForm from "./components/GeoForm";
import WeatherChart from "./components/WeatherChart";

// openweathermap.org
// https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&units=metric&appid=1a12cc5bc9f932d780e02fbfc9199a56
// api key: 1a12cc5bc9f932d780e02fbfc9199a56

// google maps api
// api key: AIzaSyDp4os33WF6-4d-xFVyL0HsUUHN7dOml_w

// api key: AIzaSyBIhVwxTief_N49XBPFWRl6CuI3WP4wIrg

export default function ChartTheWeather() {
    const [latLng, setLatLng] = useState(null);

    return (
        <div className="chart_the_weather-app-container">
            <div className="chart_the_weather-app">
                {/* form goes here */}
                <GeoForm setLatLng={setLatLng} />

                {/* chart goes here */}
                {latLng && <WeatherChart latLng={latLng} />}
            </div>
        </div>
    );
}
