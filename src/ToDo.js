import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { APP_COLORS } from './Enums/APP_COLORS';

export const ToDo = ({ todo }) => {
    return(
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
        </View>
    )
}
// стили:
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