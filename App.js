// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabStack from './BottomTabStack';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={BottomTabStack} />
      <Tab.Screen name="Настройки" component={SettingsScreen} />
      {/* Добавьте другие экраны, если необходимо */}
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;