import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { AddToDo } from './src/AddToDo';
import { Navbar } from './src/Navbar';
import { ToDo } from './src/ToDo';

export default function App() {
  const [todos, setTodos] = useState([])
  
  const addToDo = (title) => {    
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <Navbar appTitle='Мои бирки' />
      <View style={ styles.container }>
        
        <AddToDo onSubmit={addToDo} />

        <FlatList 
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <ToDo todo={item} onRemove={removeTodo} /> }
        />

      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30
  }
});
