import axios from 'axios';

const API_KEY = 'fd6be710424e76f98995d0badce3b725';
const API_BASE = 'https://api.themoviedb.org/';
const API_TRENDING = '3/trending/movie/day';

export const getTrendFilms = async () => {
  try {
    const data = await axios.get(
      `${API_BASE}${API_TRENDING}?api_key=${API_KEY}`
    );

    return data.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getFilmDetails = async filmId => {
  try {
    const data = await axios.get(
      `${API_BASE}3/movie/${filmId}?api_key=${API_KEY}`
    );

    const detailedFilm = {
      title: data.data.title,
      image: `https://image.tmdb.org/t/p/w500${data.data.poster_path}`,
      score: data.data.vote_average,
      overview: data.data.overview,
      genres: data.data.genres.map(genre => genre.name).join(', '),
    };

    return detailedFilm;
  } catch (error) {
    console.error(error);
  }
};

export const getFilmName = async query => {
  try {
    const data = await axios.get(
      `${API_BASE}3/search/movie?api_key=${API_KEY}&query=${query}`
    );

    return data.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieReview = async filmId => {
  try {
    const data = await axios.get(
      `${API_BASE}3/movie/${filmId}/reviews?api_key=${API_KEY}`
    );

    const reviews = data.data.results.map(({ id, author, content, url }) => {
      return {
        id: id,
        author: author,
        content: content,
        url: url,
      };
    });

    return reviews;
  } catch (error) {
    console.error(error);
  }
};

export const getCast = async filmId => {
  try {
    const data = await axios.get(
      `${API_BASE}3/movie/${filmId}/credits?api_key=${API_KEY}`
    );

    const cast = data.data.cast
      .slice(0, 5)
      .map(({ name, character, profile_path }) => ({
        name: name,
        character: character,
        photo: profile_path
          ? `https://image.tmdb.org/t/p/w500${profile_path}`
          : null,
      }));

    return cast;
  } catch (error) {
    console.error(error);
  }
};
