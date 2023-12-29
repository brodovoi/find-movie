// MoviesListScreen.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllMoviesScreen from './AllMoviesScreen';

const Tab = createMaterialTopTabNavigator();

const MoviesListScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Все фильмы" component={AllMoviesScreen} />
      <Tab.Screen name="Сериалы" component={AllMoviesScreen} />
    </Tab.Navigator>
  );
};

export default MoviesListScreen;
