import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import RandomMovieScreen from './screens/RandomMovieScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import MoviesListScreen from './screens/MoviesListScreen';
import ProfileScreen from './screens/ProfileScreen';
import BookmarkScreen from './screens/BookmarkScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MoviesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Все фильмы" component={MoviesListScreen} />
    <Stack.Screen name="Детали фильма" component={MovieDetailsScreen} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#fff',
          borderTopColor: 'transparent',
        },
        labelStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Все фильмы"
        component={MoviesStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Случайный фильм"
        component={RandomMovieScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shuffle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Закладки"
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmark-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
