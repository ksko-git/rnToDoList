import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { APP_COLORS } from './Enums/APP_COLORS';

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
        borderColor: APP_COLORS.loopTallinn,
        borderRadius: 5,
        marginBottom: 10
    }
})