import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.poster}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.originalTitle}>Оригинальное название: {movie.original_title}</Text>
      <Text style={styles.rating}>Рейтинг: {movie.vote_average}</Text>
      <Text style={styles.overview}>
        {movie.overview}
      </Text>
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default MovieDetailsScreen;
