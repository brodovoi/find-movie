const apiKey = 'fb16b356ee60f42317bc4549500d69c4';

// Общая функция для отправки запросов к API
const sendRequest = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Получение списка всех жанров
export const fetchGenres = async () => {
  try {
    const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=ru-RU`;
    const genresData = await sendRequest(genresUrl);

    if (!genresData.genres || genresData.genres.length === 0) {
      throw new Error('No genres found');
    }

    return genresData.genres;
  } catch (error) {
    throw error;
  }
};

// Получение детальной информации о фильме по его ID
export const fetchMovieDetails = async (movieId) => {
  try {
    const detailedMovieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=ru-RU`;
    const detailedMovieData = await sendRequest(detailedMovieUrl);

    // Получаем список жанров только если genre_ids существует
    const genres = detailedMovieData.genre_ids ? await fetchGenres() : [];

    // Преобразование идентификаторов жанров в их имена, если genre_ids существует
    const movieGenres = detailedMovieData.genre_ids
      ? detailedMovieData.genre_ids.map((genreId) => {
          const genre = genres.find((genre) => genre.id === genreId);
          return genre ? genre.name : '';
        })
      : [];

    // Возвращаем объект с деталями фильма, включая названия жанров
    return { ...detailedMovieData, genres: movieGenres };
  } catch (error) {
    throw error;
  }
};

// Получение случайного фильма
export const fetchRandomMovie = async () => {
  try {
    const randomMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ru-RU&sort_by=popularity.desc&page=1`;
    const randomMovieData = await sendRequest(randomMovieUrl);

    if (randomMovieData.results.length === 0) {
      throw new Error('No movies found');
    }

    const randomMovie =
      randomMovieData.results[
        Math.floor(Math.random() * randomMovieData.results.length)
      ];

    // Дополнительный запрос для получения детальной информации о фильме
    const detailedMovie = await fetchMovieDetails(randomMovie.id);

    return { ...randomMovie, ...detailedMovie };
  } catch (error) {
    throw error;
  }
};

// Получение списка всех фильмов
export const fetchAllMovies = async () => {
  try {
    const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ru-RU&sort_by=popularity.desc&page=1`;
    const moviesData = await sendRequest(moviesUrl);

    if (moviesData.results.length === 0) {
      throw new Error('No movies found');
    }

    // Дополнительный запрос для получения детальной информации о каждом фильме
    const moviesWithDetails = await Promise.all(
      moviesData.results.map(async (movie) => {
        const detailedMovie = await fetchMovieDetails(movie.id);
        return { ...movie, ...detailedMovie };
      })
    );

    return moviesWithDetails;
  } catch (error) {
    throw error;
  }
};
