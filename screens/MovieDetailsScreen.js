import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;
  const navigation = useNavigation();

  // Преобразование продолжительности фильма в часы и минуты
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  const durationString = `${hours}ч ${minutes}м`;

  // Преобразование массива стран в строку
  const countriesString = movie.production_countries
    .map((country) => country.name)
    .join(', ');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.poster}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.originalTitle}>
        Оригинальное название: {movie.original_title}
      </Text>
      <Text style={styles.rating}>Рейтинг: {movie.vote_average}</Text>
      <Text>Оригинальное язык: {movie.original_language}</Text>
      <Text style={styles.releaseDate}>Дата выхода: {movie.release_date}</Text>
      <Text style={styles.releaseDate}>Жанр: {movie.genre_ids.join(', ')}</Text>
      {/* <Text style={styles.releaseDate}>Жанр: {movie.genre_ids}</Text> */}
      <Text style={styles.duration}>Продолжительность: {durationString}</Text>
      <Text style={styles.countries}>Страны: {countriesString}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  poster: {
    width: 300,
    height: 450,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  originalTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 10,
  },
  genres: {
    fontSize: 16,
    marginBottom: 10,
  },
  duration: {
    fontSize: 16,
    marginBottom: 10,
  },
  productionCountries: {
    fontSize: 16,
    marginBottom: 10,
  },
  imdbLink: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default MovieDetailsScreen;
