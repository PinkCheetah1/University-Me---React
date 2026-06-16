export default function Lesson08Storage() {
  return (
    <div className="lesson-page">
      <h1 className="lesson-title">Lesson 8: Storage</h1>
      <p className="lesson-description">
        Learn how to persist data across page reloads using localStorage.
      </p>

      <div className="todo-section">
        <h3 className="todo-title">📝 TODOs</h3>
        <ul>
          <li>Create state for the text area content.</li>
          <li>Write a function to save the text to <code>localStorage</code>.</li>
          <li>Write a function to load the text from <code>localStorage</code> into state.</li>
          <li>Write a function to clear the text from state and <code>localStorage</code>.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Simple Notes</h3>
        
        {/* TODO: Connect textarea to state */}
        <textarea 
          className="input" 
          rows="6" 
          placeholder="Write your notes here..."
          style={{ resize: 'vertical' }}
        ></textarea>

        <div className="flex-gap" style={{ marginTop: '1rem' }}>
          {/* TODO: Attach load handler */}
          <button className="btn" style={{ backgroundColor: 'var(--success)' }}>Load Notes</button>
          
          {/* TODO: Attach save handler */}
          <button className="btn">Save Notes</button>
          
          {/* TODO: Attach clear handler */}
          <button className="btn btn-danger">Clear</button>
        </div>
      </div>
    </div>
  );
}
