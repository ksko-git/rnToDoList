import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import { ScreenContext } from '../screen/screenContext';
import { 
    ADD_TODO, 
    CLEAR_ERROR, 
    HIDE_LOADER, 
    REMOVE_TODO, 
    SHOW_ERROR, 
    SHOW_LOADER, 
    UPDATE_TODO 
} from '../types';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer'

export const TodoState = ({ children }) => {

    const initState = {
        todos: [],
        loading: false, 
        error: null
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

    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const hideLoader = () => dispatch({ type: HIDE_LOADER })
    // error - принимаемый текст ошибки
    const showError = error => dispatch({ type: SHOW_ERROR, error })

    const clearError = () => dispatch({ type: CLEAR_ERROR })

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