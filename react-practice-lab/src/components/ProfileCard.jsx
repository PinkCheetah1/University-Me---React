export default function ProfileCard({profile}) {
  console.log(profile);
  const name = profile.name;
  const role = profile.role;
  const image = profile.image;
  return (
    <div className="card profile-card">
      <div className="profile-img">
        {image}
      </div>
      
      {/* TODO: Display name prop here */}
      <h3>{name}</h3>
      
      {/* TODO: Display role prop here */}
      <p style={{ color: 'var(--text-muted)' }}>{role}</p>
    </div>
  );
}
