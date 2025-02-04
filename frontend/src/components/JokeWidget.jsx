import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/JokeWidget.css";

const API_KEY = "2r0IzMwfqnq/EixBi2CXoQ==gXpHXKhqE7JSoN7k";
const API_URL = "https://api.api-ninjas.com/v1/jokes";

export default function JokeWidget() {
  const [joke, setJoke] = useState({ joke: "Loading..." });

  useEffect(() => {
    fetchJoke();

    // Update every 1 hour (3600000 ms)
    const interval = setInterval(fetchJoke, 3600000);
    
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: { "X-Api-Key": API_KEY },
      });

      if (response.data.length > 0) {
        setJoke(response.data[0]); // API returns an array, take the first element
      }
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke({ joke: "Failed to load joke."});
    }
  };

  return (
    <div className="jokeContainer w-full">
      <h2 className="jokeHeader">Daily dose of humor:</h2>
      <p className="jokeText">"{joke.joke}"</p>
    </div>
  );
}
