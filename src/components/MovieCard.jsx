import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <div className="poster-container">
                <img src={movie.poster} alt={movie.title} loading="lazy" />
                <div className="overlay">
                    <span className="category-tag">{movie.category}</span>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
            </div>

            <style>{`
        .movie-card {
          background: var(--card-bg);
          border-radius: var(--radius);
          border: var(--glass-border);
          overflow: hidden;
          transition: var(--transition);
          position: relative;
          box-shadow: var(--glass-shadow);
        }

        .movie-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .poster-container {
          position: relative;
          aspect-ratio: 2/3;
          overflow: hidden;
        }

        .poster-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .movie-card:hover .poster-container img {
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
        }

        .category-tag {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          text-transform: capitalize;
          color: white;
        }

        .movie-info {
          padding: 1rem;
          text-align: left;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent);
        }

        .movie-info h3 {
          margin: 0;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .movie-info p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--secondary-color);
        }
      `}</style>
        </div>
    );
};

export default MovieCard;
