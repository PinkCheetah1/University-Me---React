export default function ProfileCard() {
  // TODO: Add props for name, role, and image
  return (
    <div className="card profile-card">
      <div className="profile-img">
        {/* TODO: Display image prop here */}
        👤
      </div>
      
      {/* TODO: Display name prop here */}
      <h3>[Name]</h3>
      
      {/* TODO: Display role prop here */}
      <p style={{ color: 'var(--text-muted)' }}>[Role]</p>
    </div>
  );
}
