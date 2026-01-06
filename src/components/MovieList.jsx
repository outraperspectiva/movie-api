import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    if (movies.length === 0) {
        return <div className="no-movies">No movies found in this category.</div>
    }

    return (
        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}

            <style>{`
        .movie-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 1.5rem;
          padding-bottom: 2rem;
        }
        
        .no-movies {
            color: var(--secondary-color);
            margin-top: 2rem;
        }

        @media (min-width: 640px) {
            .movie-grid {
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            }
        }
      `}</style>
        </div>
    );
};

export default MovieList;
