let movies = [
  {
    id: 0,
    name: "스타워즈",
    score: 20,
  },
  {
    id: 1,
    name: "어벤져스",
    score: 89,
  },
  {
    id: 2,
    name: "대부",
    score: 99,
  },
  {
    id: 3,
    name: "로건",
    score: 46,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
