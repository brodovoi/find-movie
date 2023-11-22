import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RandomMovieScreen from './screens/RandomMovieScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Случайный фильм" component={RandomMovieScreen} />
        <Tab.Screen name="Детали фильма" component={MovieDetailsScreen} />
        {/* Добавьте другие экраны или компоненты, если необходимо */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>2Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
