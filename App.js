import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import { BraSizes } from './src/components/ui/BraSizes';

// async function loadApplication() {
//   await Font.loadAsync({
//     'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
//     'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
//   })
// }

export default function App() {
  // готово ли приложение к отрисовке
  const [isReady, setIsReady] = useState(false)
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    { id: '1', title: 'Выучить реакт нэйтив!'}
  ])

  // обработка загрузки приложения
  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={this._cacheResourcesAsync}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   ); 
  // }
  
  const addToDo = title => {    
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ])
  }

  const updateTodo = (id, title) => {
    setTodos(oldTodo => 
      oldTodo.map(todo => {
        // если id старого состояния равен переданному id
        if (todo.id === id) {
          todo.title = title
        }
        return todo
      }
    ))
  }

  const removeTodo = id => {
    // получаем по id нужный элемент
    const todo = todos.find(t => t.id === id)
    
    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        {
          text: 'Отмена',
          style: 'cancel'
        },
        { 
          text: 'Удалить', 
          onPress: () => {
            // возвращаемся на главный экран
            setTodoId(null)
            // и после удаляем элемент по id
            setTodos(prev => prev.filter(todo => todo.id !== id))
          }
        }
      ],
      { cancelable: false }
    );    
  }

  let content = (
    <MainScreen 
      todos={todos} 
      addToDo={addToDo} 
      removeTodo={removeTodo} 
      // получаем нужный id колбеком и меняем стейт
      openTodo={setTodoId} 
    />
  )
  // если есть какой-либо todoId, тогда показываем определенный Todo по этому id
  if (todoId) {
    // находим todo в массиве todos
    const selectedTodo = todos.find(todo => todo.id === todoId)
    // задаем null для todoId, чтобы мейнскрин не рендерился
    content = (
      <TodoScreen 
        onRemove={removeTodo} 
        goBack={() => setTodoId(null)} 
        todo={selectedTodo} 
        onSave={updateTodo}
      />
    )
  }

  return (
    <View>
      <Navbar appTitle='Мои бирки' />
      <View style={ styles.container }>
        {content}
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
