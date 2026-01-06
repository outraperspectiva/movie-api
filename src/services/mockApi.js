
const categories = [
    { id: 'all', name: 'All' },
    { id: 'action', name: 'Action' },
    { id: 'comedy', name: 'Comedy' },
    { id: 'drama', name: 'Drama' },
    { id: 'scifi', name: 'Sci-Fi' },
    { id: 'horror', name: 'Horror' },
];

const movies = [
    {
        id: 1,
        title: 'Inception',
        year: 2010,
        poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
        category: 'action'
    },
    {
        id: 2,
        title: 'The Hangover',
        year: 2009,
        poster: 'https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg',
        category: 'comedy'
    },
    {
        id: 3,
        title: 'The Dark Knight',
        year: 2008,
        poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        category: 'action'
    },
    {
        id: 4,
        title: 'Interstellar',
        year: 2014,
        poster: 'https://image.tmdb.org/t/p/w500/gEU2QniL6C8z1dY4rer3vi87nGx.jpg',
        category: 'scifi'
    },
    {
        id: 5,
        title: 'Parasite',
        year: 2019,
        poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
        category: 'drama'
    },
    {
        id: 6,
        title: 'Joker',
        year: 2019,
        poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
        category: 'drama'
    },
    {
        id: 7,
        title: 'Avengers: Endgame',
        year: 2019,
        poster: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
        category: 'action'
    },
    {
        id: 8,
        title: 'Superbad',
        year: 2007,
        poster: 'https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2Bnqhw6pogESaUF.jpg',
        category: 'comedy'
    },
    {
        id: 9,
        title: 'The Matrix',
        year: 1999,
        poster: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
        category: 'scifi'
    },
    {
        id: 10,
        title: 'Get Out',
        year: 2017,
        poster: 'https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg',
        category: 'horror'
    }
];

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(categories), 300);
    });
};

export const getMovies = (categoryId = 'all') => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (categoryId === 'all') {
                resolve(movies);
            } else {
                resolve(movies.filter(movie => movie.category === categoryId));
            }
        }, 500);
    });
};
