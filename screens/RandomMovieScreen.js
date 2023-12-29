import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchRandomMovie } from '../api/api';

const RandomMovieScreen = () => {
  const [randomMovie, setRandomMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchRandomMovieData();
  }, []);

  const fetchRandomMovieData = async () => {
    try {
      setLoading(true);
      setError(null);
      const movie = await fetchRandomMovie();
      setRandomMovie(movie);
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handlePressMovieDetails = () => {
    if (randomMovie) {
      console.log('Детали фильма:', randomMovie);
      navigation.navigate('Детали фильма', { movie: randomMovie });
    }
  };

  const handlePressRandomMovie = () => {
    fetchRandomMovieData();
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="blue" />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {randomMovie && !loading && !error && (
        <View>
          <Image
            style={styles.poster}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`,
            }}
          />
          <Text style={styles.title}>{randomMovie.title}</Text>
          <Text style={styles.originalTitle}>
            Оригинальное название: {randomMovie.original_title}
          </Text>
          <Text style={styles.rating}>Рейтинг: {randomMovie.vote_average}</Text>
          <TouchableOpacity onPress={handlePressMovieDetails}>
            <Text style={styles.detailsLink}>Подробнее...</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={handlePressRandomMovie}>
        <Text style={styles.buttonText}>Найти Случайный фильм</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  poster: {
    width: 300,
    height: 450,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  originalTitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 10,
  },
  detailsLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000000',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default RandomMovieScreen;
