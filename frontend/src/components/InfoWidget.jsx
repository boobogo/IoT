import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/InfoWidget.css";

const API_KEY = "8dae69fc16242d56f516e14ae833297c"; // Replace with your API key
const PRAGUE_LAT = 50.0755;
const PRAGUE_LON = 14.4378;

export default function InfoWidget() {
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(new Date());


  useEffect(() => {
    // Update the time every minute
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);

    // Fetch Prague's weather
    fetchWeather();

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${PRAGUE_LAT}&lon=${PRAGUE_LON}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const getWeatherEmoji = (description) => {
    if (!description || !weather) return "❓";
    const weatherDesc = description.toLowerCase();

    if (weatherDesc.includes("clear")) return "☀";
    if (weatherDesc.includes("cloud")) return "☁";
    if (weatherDesc.includes("rain")) return "☂";
    if (weatherDesc.includes("snow")) return "❆";
    if (weatherDesc.includes("wind")) return "💨";
    return "";
  };

  return (
    <div className="info-widget">
        <p>
            {time.toLocaleDateString("en-GB", {
                timeZone: "Europe/Prague",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                weekday: "short"
            })}
        </p>
      <p>{time.toLocaleTimeString("en-US", { timeZone: "Europe/Prague",hour12: false, hour: '2-digit', minute: '2-digit' })}</p>
      {weather ? (
        <p>
          {weather.main.temp}°C {getWeatherEmoji(weather.weather[0].description)}
        </p>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}