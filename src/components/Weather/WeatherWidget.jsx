import { useEffect, useState } from "react";
import { getWeather } from "../../services/weatherApi";

function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather("Hyderabad");
        setWeather(data);
      } catch (err) {
        setError("Unable to fetch weather data.");
      }
    };

    fetchWeather();
  }, []);

  if (error) {
    return <div className="card">{error}</div>;
  }

  if (!weather) {
    return (
      <div className="card loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  const today = new Date();

  return (
    <div className="card weather-card">

      <div className="weather-header">
        {today.toLocaleDateString()} &nbsp;&nbsp;
        {today.toLocaleTimeString()}
      </div>

      <div className="weather-body">

        <div className="temp-section">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather"
          />

          <h2>{Math.round(weather.main.temp)}°C</h2>

          <p>{weather.weather[0].main}</p>
        </div>

        <div className="weather-info">

          <p>💧 {weather.main.humidity}%</p>

          <p>🌬 {weather.wind.speed} m/s</p>

          <p>🌡 {weather.main.pressure} hPa</p>

        </div>

      </div>

    </div>
  );
}

export default WeatherWidget;