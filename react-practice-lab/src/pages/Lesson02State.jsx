export default function Lesson02State() {
  return (
    <div className="lesson-page">
      <h1 className="lesson-title">Lesson 2: State</h1>
      <p className="lesson-description">
        Learn how to use useState to track data that changes over time.
      </p>

      <div className="todo-section">
        <h3 className="todo-title">📝 TODOs</h3>
        <ul>
          <li>Create a <code>count</code> state variable starting at 0.</li>
          <li>Implement an increment function.</li>
          <li>Implement a decrement function.</li>
          <li>Implement a reset function.</li>
          <li>Attach these functions to the correct buttons.</li>
          <li>Display the count.</li>
        </ul>
      </div>

      <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
        {/* TODO: Render the current count state here */}
        <h2 style={{ fontSize: '4rem', marginBottom: '2rem' }}>0</h2>

        <div className="flex-gap" style={{ justifyContent: 'center' }}>
          {/* TODO: Attach decrement handler */}
          <button className="btn btn-danger">- Decrement</button>
          
          {/* TODO: Attach reset handler */}
          <button className="btn" style={{ backgroundColor: 'var(--border-color)' }}>Reset</button>
          
          {/* TODO: Attach increment handler */}
          <button className="btn">+ Increment</button>
        </div>
      </div>
    </div>
  );
}
