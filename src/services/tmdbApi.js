
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGZjYjBiZmJjZjU4YjA0NjRhMDYwY2FkZmM3ZTM1ZSIsIm5iZiI6MTc0NzYwNzEyNS44MzcsInN1YiI6IjY4MmE1ZTU1Y2MxZDY1Nzc3ZDhjMDdjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WnhEP31e_c1bHr8_NPfEaqHXNRWtl2Ij7g1rqWOvu2E';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const getHeaders = () => ({
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
});

export const getCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/genre/movie/list?language=pt-BR`, {
            headers: getHeaders(),
        });
        const data = await response.json();
        return [
            { id: 'all', name: 'Todos' }, // Changed fallback name to Portuguese, though UI translation handles it too. Let's keep it consistent.
            ...data.genres
        ];
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};

export const getMovies = async (categoryId = 'all') => {
    try {
        let url = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc`;

        if (categoryId !== 'all') {
            url += `&with_genres=${categoryId}`;
        }

        const response = await fetch(url, {
            headers: getHeaders(),
        });
        const data = await response.json();

        return data.results.map(movie => ({
            id: movie.id,
            title: movie.title,
            year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
            overview: movie.overview,
            poster: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://placehold.co/500x750?text=Sem+Imagem',
            category: 'Filme'
        }));
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};

export const getMovieDetails = async (movieId) => {
    try {
        // Credits don't always have language support in the same way, but it's good practice to try.
        // However, standard endpoint is /movie/{movie_id}/credits
        const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?language=pt-BR`, {
            headers: getHeaders(),
        });
        const data = await response.json();

        const director = data.crew?.find(person => person.job === 'Director')?.name || 'Desconhecido';
        const cast = data.cast?.slice(0, 5).map(person => person.name).join(', ') || 'Desconhecido';

        return { director, cast };
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return { director: 'Desconhecido', cast: 'Desconhecido' };
    }
};
