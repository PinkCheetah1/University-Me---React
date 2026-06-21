export default function Lesson01Variables() {
  const name = "Hannah"
  const age = 21
  const favoriteHobby = "Dancing"

  const yearsUntil30 = 30 - age

  return (
    <div className="lesson-page">
      <h1 className="lesson-title">Lesson 1: Variables and Rendering</h1>
      <p className="lesson-description">
        Learn how to declare variables and render them directly into your JSX.
      </p>

      <div className="todo-section">
        <h3 className="todo-title">📝 TODOs</h3>
        <ul>
          <li>Create variables for display name, age, and favorite hobby.</li>
          <li>Calculate years until 30 using the age variable.</li>
          <li>Render all variables in the JSX below.</li>
        </ul>
      </div>

      <div className="card profile-card">
        {/* TODO: Display initial profile image (could be an emoji or initials) */}
        <div className="profile-img">👤</div>

        {/* TODO: Replace these hardcoded values with your variables */}
        <h2>{name}</h2>
        <p style={{ color: 'var(--text-muted)' }}>Age: {age}</p>
        <p style={{ color: 'var(--text-muted)' }}>Years until 30: {yearsUntil30}</p>
        <p style={{ color: 'var(--text-muted)' }}>Hobby: {favoriteHobby}</p>
      </div>
    </div>
  );
}
