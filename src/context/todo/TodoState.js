import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import { ScreenContext } from '../screen/screenContext';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer'

export const TodoState = ({ children }) => {
    // первоначально пустой массив todo
    const initState = {
        todos: [
            { id: '1', title: 'Выучить реакт нэйтив!'}
        ]
    }

    const { changeScreen } = useContext(ScreenContext)

    const [state, dispatch] = useReducer(todoReducer, initState)

    const addToDo = title => dispatch({ type: ADD_TODO, title: title})

    const removeTodo = id => {
        const todo = state.todos.find(t => t.id === id)

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
                    // сначала возвращаемся на стартовый экран
                    changeScreen(null)
                    dispatch({ type: REMOVE_TODO, id: id })
                }
            }
            ],
            { cancelable: false }
        )
        
    }

    const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id: id, title: title })

    return (
        <TodoContext.Provider 
            // todoContext (MainLayout)
            value={{ 
                todos: state.todos ,
                addToDo,
                removeTodo,
                updateTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}