// import { fetchWeather } from '../data/mockWeather';

export default function Lesson10Effects() {
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
          {/* TODO: render loading, error, or weather data automatically */}
          
          <div style={{ color: 'var(--text-muted)' }}>
            Weather should load automatically...
          </div>
        </div>
      </div>
    </div>
  );
}
