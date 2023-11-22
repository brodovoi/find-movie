// BottomTabStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RandomMovieScreen from './screens/RandomMovieScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';

const Stack = createStackNavigator();

const BottomTabStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Поиск Фильмов" component={RandomMovieScreen} />
      <Stack.Screen name="Детали фильма" component={MovieDetailsScreen} />
      {/* Добавьте другие экраны, если необходимо */}
    </Stack.Navigator>
  );
};

export default BottomTabStack;