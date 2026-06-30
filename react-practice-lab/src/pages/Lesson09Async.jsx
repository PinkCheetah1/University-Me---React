// TODO: Import fetchWeather function
import { fetchWeather } from '../data/mockWeather';
import { useState } from 'react';

export default function Lesson09Async() {
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



  return (
    <div className="lesson-page">
      <h1 className="lesson-title">Lesson 9: Async</h1>
      <p className="lesson-description">
        Learn how to handle promises and asynchronous data loading.
      </p>

      <div className="todo-section">
        <h3 className="todo-title">📝 TODOs</h3>
        <ul>
          <li>Create state for <code>weather</code> data, <code>isLoading</code>, and <code>error</code>.</li>
          <li>Create an async function to call <code>fetchWeather()</code>.</li>
          <li>Handle the loading state while the promise resolves.</li>
          <li>Handle the success state by saving the data.</li>
          <li>Handle errors using try/catch.</li>
          <li>Trigger the fetch function when the user clicks the button.</li>
        </ul>
      </div>

      <div className="card" style={{ textAlign: 'center' }}>
        <h3>Check Weather</h3>
        
        <div style={{ margin: '2rem 0' }}>
          {/* TODO: conditionally render loading, error, or weather data based on state */}
            {content}
        </div>

        {/* TODO: Attach fetch click handler */}
        <button className="btn" onClick={getData}>Load Weather</button>
      </div>
    </div>
  );
}