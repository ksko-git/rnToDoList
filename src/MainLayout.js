import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import { Navbar } from './components/Navbar';
import { MainScreen } from './screens/MainScreen';
import { LAYOUT_BLANKS } from './enums/LAYOUT_BLANKS';
import { TodoContext } from './context/todo/todoContext';
import { TodoScreen } from './screens/TodoScreen';
import { ScreenContext } from './context/screen/screenContext';

export const MainLayout = () => {
    const { todoId } = useContext(ScreenContext)

    // const removeTodo = id => {
    //     // получаем по id нужный элемент
    //     const todo = todos.find(t => t.id === id)

    return (
        <View style={styles.wrapper}>
            <Navbar appTitle='Мои бирки' />
            <View style={styles.container}>
                {todoId ? <TodoScreen /> : <MainScreen /> }
            </View>      
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: LAYOUT_BLANKS.paddingHorizontal,
        paddingVertical: LAYOUT_BLANKS.paddingVertical
    },
    wrapper: {
        flex: 1
    }
  });
  