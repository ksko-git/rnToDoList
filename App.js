import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddToDo } from './src/AddToDo';
import { Navbar } from './src/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar appTitle='Мои бирки' />
      <AddToDo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});
