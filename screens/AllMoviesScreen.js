import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { fetchAllMovies } from '../api/api';
import { useNavigation } from '@react-navigation/native';

const AllMoviesScreen = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    fetchMoviesData();
  }, []);

  const fetchMoviesData = async () => {
    try {
      const moviesData = await fetchAllMovies();
      setMovies(moviesData);
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handlePressMovie = (movie) => {
    navigation.navigate('Детали фильма', { movie });
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity
      style={styles.movieCard}
      onPress={() => handlePressMovie(item)}>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
      />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No movies found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderMovieItem}
      numColumns={3}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieCard: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    margin: 8,
    borderRadius: 8,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  movieTitle: {
    fontSize: 16,
    marginTop: 8,
  },
  poster: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default AllMoviesScreen;
