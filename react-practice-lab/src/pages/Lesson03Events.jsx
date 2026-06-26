import { useState } from "react";
export default function Lesson03Events() {
  const [reaction, setReaction] = useState("...")

  const handleChange = (e) => {
    switch (e.target.title) {
      case "happy":
        setReaction("😄");
        break;
      case "sad":
        setReaction("😢");
        break;
      case "excited":
        setReaction("🎉");
        break;
      case "confused":
        setReaction("🤔");
        break;
    }
  }

  return (
    <div className="lesson-page">
      <h1 className="lesson-title">Lesson 3: Events</h1>
      <p className="lesson-description">
        Learn how to attach event listeners and respond to user interactions.
      </p>

      <div className="todo-section">
        <h3 className="todo-title">📝 TODOs</h3>
        <ul>
          <li>Create state to track the currently selected reaction.</li>
          <li>Create event handlers that update the state when a button is clicked.</li>
          <li>Display the current reaction in the result area.</li>
        </ul>
      </div>

      <div className="card">
        <h3>How are you feeling today?</h3>
        
        <div className="flex-gap" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
          {/* TODO: Attach click handlers to update the reaction state */}
          <button className="btn" title="happy" onClick={handleChange}>Happy 😄</button>
          <button className="btn" title="sad" onClick={handleChange}>Sad 😢</button>
          <button className="btn" title="excited" onClick={handleChange}>Excited 🎉</button>
          <button className="btn" title="confused" onClick={handleChange}>Confused 🤔</button>
        </div>

        <div>
          <h4>Current Reaction:</h4>
          {/* TODO: Render the selected reaction state inside this div */}
          <div className="reaction-result">
            {reaction}
          </div>
        </div>
      </div>
    </div>
  );
}
