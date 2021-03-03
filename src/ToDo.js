import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { app_colors } from './enums/app_colors';

export const ToDo = ({ todo, onRemove }) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    }

    return(
        <TouchableOpacity 
            onPress={() => console.log('Pressed', todo.id)}
            onLongPress={longPressHandler}
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: app_colors.loopTallinn,
        borderRadius: 5,
        marginBottom: 10
    }
})