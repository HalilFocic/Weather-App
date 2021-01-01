import "./App.css";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import WeatherApp from "./WeatherCard";
import { MdError } from "react-icons/md";
const apiKey = "9089186cf58c3f6edb2715df96895f63";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const test =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=9089186cf58c3f6edb2715df96895f63&units=metric";
const App = () => {
  const [city, setCity] = useState("");
  const [results, setResults] = useState(null);
  const [message, setMessage] = useState("Search a city!");
  const fetchData = async () => {
    const response = await fetch(
      url + city + "&appid=" + apiKey + "&units=metric"
    );
    const text = await response.json();
    setResults(text);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) fetchData();
    else {
      alert("Please enter a value!");
    }
  };
  return (
    <main
      className={`weather-app ${
        results
          ? results.cod === 200
            ? results.main.temp > 15
              ? "warm"
              : "cold"
            : ""
          : ""
      }`}
    >
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
        <div>
          {results ? (
            results.cod === 200 ? (
              <WeatherApp {...results} />
            ) : (
              <div className="error">
                Looks like that city doesn't exist
                <span className="error-span">
                  <MdError />
                </span>
              </div>
            )
          ) : (
            <div className="no-city">Search a city!</div>
          )}
        </div>
      </section>
    </main>
  );
};
export default App;
