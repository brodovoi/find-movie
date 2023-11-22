import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    
  return (
    <View style={styles.container}>
      <Text>Экран SettingsScreen</Text>
      {/* Добавьте компоненты для настроек */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
