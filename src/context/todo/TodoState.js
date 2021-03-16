import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import { ScreenContext } from '../screen/screenContext';
import { 
    ADD_TODO, 
    CLEAR_ERROR, 
    FETCH_TODOS, 
    HIDE_LOADER, 
    REMOVE_TODO, 
    SHOW_ERROR, 
    SHOW_LOADER, 
    UPDATE_TODO 
} from '../types';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer'
import { Http } from '../../http';

export const TodoState = ({ children }) => {

    const initState = {
        todos: [],
        loading: false, 
        error: null
    }

    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initState)

    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const hideLoader = () => dispatch({ type: HIDE_LOADER })
    // error - принимаемый текст ошибки
    const showError = error => dispatch({ type: SHOW_ERROR, error })

    const clearError = () => dispatch({ type: CLEAR_ERROR })

    // получить список всех todo с сервера
    const fetchTodos = async () => {
        showLoader()
        clearError()
        try {
            const data = Http.get(
                'https://rnlabels-default-rtdb.europe-west1.firebasedatabase.app/todos.json'
            )
            // преобразование объекта в массив
            const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
            dispatch({ type: FETCH_TODOS, todos })
        } catch (e) {
            showError('Что-то пошло не так...')
            console.log(e)
        } finally {
            hideLoader()
        }
    }

    const addToDo = async title => {
        clearError()
        try {
            const data = await Http.post(
                'https://rnlabels-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
                { title }
            )
            dispatch({ type: ADD_TODO, title: title, id: data.name })
        } catch (e) {
            showError('Что-то пошло не так...')
        }
    }

    const updateTodo = async (id, title) => {
        clearError()
        try {
            await Http.patch(
                `https://rnlabels-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
                { title }
            )
            dispatch({ type: UPDATE_TODO, id: id, title: title })
        } catch (e) {
            showError('Что-то пошло не так...')
            console.log(e)
        }
    }

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
                onPress: async () => {
                    // сначала возвращаемся на стартовый экран
                    changeScreen(null)
                    await Http.delete(
                        `https://rnlabels-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`
                    )
                    dispatch({ type: REMOVE_TODO, id: id })
                }
            }
            ],
            { cancelable: false }
        )        
    }

    return (
        <TodoContext.Provider 
            // todoContext (MainLayout)
            value={{ 
                todos: state.todos,
                loading: state.loading,
                error: state.error,
                fetchTodos, // экспортируем для вызова в компоненте в нужном месте
                addToDo,
                removeTodo,
                updateTodo              
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}