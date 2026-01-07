import React from 'react';
import MovieCard from './MovieCard';
import { useTranslation } from 'react-i18next';

const MovieList = ({ movies, onMovieSelect }) => {
    const { t } = useTranslation();

    if (movies.length === 0) {
        return <div className="no-movies">{t('movies.notFound')}</div>
    }

    return (
        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onClick={() => onMovieSelect(movie)} />
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
