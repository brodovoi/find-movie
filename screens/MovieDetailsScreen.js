import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.originalTitle}>Оригинальное название: {movie.original_title}</Text>
      <Text style={styles.rating}>Рейтинг: {movie.vote_average}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
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
    color: 'gray',
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
    textAlign: 'center',
  },
});

export default MovieDetailsScreen;
