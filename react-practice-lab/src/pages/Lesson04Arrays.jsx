import { movies } from '../data/movies';

export default function Lesson04Arrays() {
  function renderMovieReview(item) {
    return ( 
      <div className="movie-card">
          <div className="movie-img-placeholder">{emoji}</div>
          <div className="movie-info">
            <h4>{title}</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              Rating: {rating} / 10
            </p>
          </div>
        </div> 
    )
  }
  return (
    <div className="lesson-page">
      <h1 className="lesson-title">Lesson 4: Arrays</h1>
      <p className="lesson-description">
        Learn how to render lists of data using map() and filter().
      </p>

      <div className="todo-section">
        <h3 className="todo-title">📝 TODOs</h3>
        <ul>
          <li>Import the movies array from <code>../data/movies.js</code>.</li>
          <li>Use <code>.filter()</code> to only show movies with a rating above 8.5.</li>
          <li>Use <code>.map()</code> to render a movie card for each movie.</li>
          <li>Display the total count of filtered movies.</li>
        </ul>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        {/* TODO: Display the count of filtered movies */}
        <strong>Showing [Count] highly rated movies</strong>
      </div>

      <div className="movie-grid">
        {/* TODO: Map over your filtered movies array to render these cards */}
        
        {/* Placeholder Card - Replace with mapped data */}
        {movies.map(item => 
          (<div className="movie-card">
          <div className="movie-img-placeholder">{item.emoji}</div>
          <div className="movie-info">
            <h4>{item.title}</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              Rating: {item.rating} / 10
            </p>
          </div>
        </div> 
        ))}
        
      </div>
    </div>
  );
}
