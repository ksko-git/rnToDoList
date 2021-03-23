import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { APP_COLORS } from '../enums/APP_COLORS';
import { AppText } from './ui/AppText';

export const ToDo = ({ todo, onRemove, onOpen }) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    }

    return(
        <TouchableOpacity 
            onPress={() => onOpen(todo.id)}
            onLongPress={longPressHandler}
        >
            <View style={styles.todo}>
                <AppText>{todo.title}</AppText>
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
        borderColor: APP_COLORS.input,
        borderRadius: 5,
        marginBottom: 10
    }
})