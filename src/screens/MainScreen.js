import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { AddToDo } from '../components/AddToDo';
import { ToDo } from '../components/ToDo';

export const MainScreen = ({ addToDo, todos, removeTodo, openTodo }) => {
    let content = (
        <FlatList 
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({ item }) => (
                <ToDo todo={item} onRemove={removeTodo} onOpen={openTodo} /> 
            )}
        />
    )

    if (todos.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image 
                    source={require('../../assets/no-items.png')} 
                    style={styles.image} 
                />
            </View>
        )
    }

    return(
        <View>
            <AddToDo onSubmit={addToDo} />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})