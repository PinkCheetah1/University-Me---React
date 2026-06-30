import { fetchWeather } from '../data/mockWeather';
import { useState, useEffect } from 'react';

export default function Lesson10Effects() {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  async function getData() {
    // While we wait, loading screen
    setIsLoading(true);
    setError("");
    // Put in the request
    // If we get an error, display error. 
    try {
      const data = await fetchWeather();
      setWeather(data)
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }

  let content = "";
  if (isLoading) {
    content = <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Loading...</div>;
  } else if (error) {
    content = <div style={{ color: 'var(--danger)' }}>Error loading weather! Error: {error} </div>;
  } else if (weather) {
    content = <div>
      <div style={{ fontSize: '4rem' }}>{weather.emoji}</div>
      <h2>{weather.temp}</h2>
      <p>{weather.condition} in {weather.location}</p>
    </div>
  } else {
    content = <div style={{ color: 'var(--text-muted)' }}>Click to view weather.</div>
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="lesson-page">
      <h1 className="lesson-title">Lesson 10: useEffect</h1>
      <p className="lesson-description">
        Learn how to trigger side effects automatically when components mount or update.
      </p>

      <div className="todo-section">
        <h3 className="todo-title">📝 TODOs</h3>
        <ul>
          <li>Bring over your weather state and logic from Lesson 9.</li>
          <li>Use the <code>useEffect</code> hook to load data automatically when the component mounts.</li>
          <li>Ensure the dependency array is correct to prevent infinite loops.</li>
          <li>Remove the manual load button.</li>
        </ul>
      </div>

      <div className="card" style={{ textAlign: 'center' }}>
        <h3>Live Weather Widget</h3>

        <div style={{ margin: '2rem 0' }}>
          {/* TODO: conditionally render loading, error, or weather data based on state */}
            {content}
        </div>
      </div>
    </div>
  );
}
