// TODO: Import fetchWeather function
// import { fetchWeather } from '../data/mockWeather';

export default function Lesson09Async() {
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
          
          <div style={{ color: 'var(--text-muted)' }}>
            Click the button to load weather data.
          </div>

          {/* Loading example */}
          {/* <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Loading...</div> */}

          {/* Success example */}
          {/* 
          <div>
            <div style={{ fontSize: '4rem' }}>☀️</div>
            <h2>72°F</h2>
            <p>Sunny in San Francisco</p>
          </div>
          */}

          {/* Error example */}
          {/* <div style={{ color: 'var(--danger)' }}>Error loading weather!</div> */}
        </div>

        {/* TODO: Attach fetch click handler */}
        <button className="btn">Load Weather</button>
      </div>
    </div>
  );
}
