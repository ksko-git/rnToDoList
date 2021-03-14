import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { Navbar } from './components/Navbar';
import { MainScreen } from './screens/MainScreen';
import { LAYOUT_BLANKS } from './enums/LAYOUT_BLANKS';
import { TodoContext } from './context/todo/TodoContext';
import { TodoScreen } from './screens/TodoScreen';

export const MainLayout = () => {
    const { todos, removeTodo, updateTodo, addTodo } = useContext(TodoContext)
    const [todoId, setTodoId] = useState(null)
    // const [todos, setTodos] = useState([])

    // const addToDo = title => {    
    //     setTodos(prev => [
    //       ...prev,
    //       {
    //         id: Date.now().toString(),
    //         title: title
    //       }
    //     ])
    // }
    
    // const updateTodo = (id, title) => {
    //     setTodos(oldTodo => 
    //         oldTodo.map(todo => {
    //         // если id старого состояния равен переданному id
    //         if (todo.id === id) {
    //             todo.title = title
    //         }
    //         return todo
    //         }
    //     ))
    // }
    
    // const removeTodo = id => {
    //     // получаем по id нужный элемент
    //     const todo = todos.find(t => t.id === id)
        
    //     Alert.alert(
    //         'Удаление элемента',
    //         `Вы уверены, что хотите удалить "${todo.title}"?`,
    //         [
    //         {
    //             text: 'Отмена',
    //             style: 'cancel'
    //         },
    //         { 
    //             text: 'Удалить', 
    //             onPress: () => {
    //             // возвращаемся на главный экран
    //             setTodoId(null)
    //             // и после удаляем элемент по id
    //             setTodos(prev => prev.filter(todo => todo.id !== id))
    //             }
    //         }
    //         ],
    //         { cancelable: false }
    //     )
    // }
    
    let content = (
        <MainScreen 
            todos={todos} 
            addToDo={addTodo} 
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
            <View style={styles.container}>
                {content}
            </View>      
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: LAYOUT_BLANKS.paddingHorizontal,
      paddingVertical: LAYOUT_BLANKS.paddingVertical
    }
  });
  