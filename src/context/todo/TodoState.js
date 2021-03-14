import React, { useReducer } from 'react';
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
    const [state, dispatch] = useReducer(todoReducer, initState)

    const addTodo = title => dispatch({ type: ADD_TODO, title: title})

    const removeTodo = id => dispatch({ type: REMOVE_TODO, id: id })

    const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id: id, title: title })

    return (
        <TodoContext.Provider 
            // todoContext (MainLayout)
            value={{ 
                todos: state.todos ,
                addTodo,
                removeTodo,
                updateTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}