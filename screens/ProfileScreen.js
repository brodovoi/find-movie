import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Экран ProfileScreen</Text>
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

export default ProfileScreen;
