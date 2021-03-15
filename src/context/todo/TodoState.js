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

export const TodoState = ({ children }) => {

    const initState = {
        todos: [],
        loading: false, 
        error: null
    }

    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initState)

    // получить список всех todo с сервера
    const fetchTodos = async () => {
        const response = await fetch(
            'https://rnlabels-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }
        )
        const data = await response.json()
        console.log('Fetch data', data)
        // преобразование объекта в массив
        const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
        dispatch({ type: FETCH_TODOS, todos })
    }

    const addToDo = async title => {
        // запрос к серверу
        // fetch возвращает промисс
        // todos - коллекция, в которой все будет сохраняться
        const response = await fetch(
            'https://rnlabels-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title })
            }
        )
        // т.к. response - это не конечные даные, унжно их распарсить
        // 'превращаем' объект сервера в json, который также является промиссом
        const data = await response.json()
        console.log('ID', data.name)
        dispatch({ type: ADD_TODO, title: title, id: data.name })
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