import "./App.css";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import WeatherApp from "./WeatherCard";
const apiKey = "9089186cf58c3f6edb2715df96895f63";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const test =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=9089186cf58c3f6edb2715df96895f63&units=metric";
const App = () => {
  const [city, setCity] = useState("");
  const [results, setResults] = useState(null);
  const fetchData = async () => {
    const response = await fetch(
      url + city + "&appid=" + apiKey + "&units=metric"
    );
    const text = await response.json();
    setResults(text);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <main className="weather-app">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            className="city-input"
            type="text"
            onChange={(e) => setCity(e.target.value)}
          />

          <button type="submit" className="submit-btn">
            Search
          </button>
        </form>
      </div>
      <section className="results">
        <p>{results ? <WeatherApp {...results} /> : "picka"}</p>
      </section>
    </main>
  );
};
export default App;
