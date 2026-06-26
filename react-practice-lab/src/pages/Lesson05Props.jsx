import ProfileCard from '../components/ProfileCard';

export default function Lesson05Props() {
  const profiles = [
    {id: 1, name: "Hannah", role: "Wifey", image: "👰‍♀️"},
    {id: 2, name: "Spencer", role: "Hubby", image: "🤵‍♂️"},
    {id: 3, name: "Autumn", role: "Cat", image: "🐈"}
  ]
  return (
    <div className="lesson-page">
      <h1 className="lesson-title">Lesson 5: Props</h1>
      <p className="lesson-description">
        Learn how to pass data from a parent component to child components.
      </p>

      <div className="todo-section">
        <h3 className="todo-title">📝 TODOs</h3>
        <ul>
          <li>Open <code>src/components/ProfileCard.jsx</code> and set up its props.</li>
          <li>Import <code>ProfileCard</code> into this file.</li>
          <li>Render multiple <code>ProfileCard</code> components.</li>
          <li>Pass different data (name, role, image) to each instance.</li>
        </ul>
      </div>

      <div className="movie-grid">
        {/* TODO: Render your ProfileCard components here */}
        
        {/* Example: <ProfileCard name="Alice" role="Developer" image="👩‍💻" /> */}
        {profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile}></ProfileCard>
        ))}
      </div>
    </div>
  );
}
