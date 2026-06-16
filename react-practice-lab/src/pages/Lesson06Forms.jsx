export default function Lesson06Forms() {
  return (
    <div className="lesson-page">
      <h1 className="lesson-title">Lesson 6: Forms</h1>
      <p className="lesson-description">
        Learn how to capture user input with controlled components.
      </p>

      <div className="todo-section">
        <h3 className="todo-title">📝 TODOs</h3>
        <ul>
          <li>Create state variables for: name, species, and age.</li>
          <li>Attach <code>value</code> and <code>onChange</code> props to each input.</li>
          <li>Display a live preview of the data below the form.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Pet Registration</h3>
        <form style={{ marginTop: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
            {/* TODO: Connect this input to state */}
            <input type="text" className="input" placeholder="e.g. Fluffy" />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Species</label>
            {/* TODO: Connect this input to state */}
            <input type="text" className="input" placeholder="e.g. Cat" />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Age</label>
            {/* TODO: Connect this input to state */}
            <input type="number" className="input" placeholder="e.g. 3" />
          </div>

          <button className="btn">Register</button>
        </form>
      </div>

      <div className="card" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', borderColor: 'var(--primary)' }}>
        <h3>Live Preview</h3>
        <div style={{ marginTop: '1rem' }}>
          {/* TODO: Display live state values here */}
          <p><strong>Name:</strong> [Name here]</p>
          <p><strong>Species:</strong> [Species here]</p>
          <p><strong>Age:</strong> [Age here]</p>
        </div>
      </div>
    </div>
  );
}
