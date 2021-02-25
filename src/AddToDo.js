import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import { APP_COLORS } from './Enums/APP_COLORS';

export const AddToDo = props => {
    return (
        <View style={styles.mainBlock}>
            <TextInput style={styles.input} />
            <Button style={styles.button} title="Добавить" />
        </View>        
    )
}

const styles = StyleSheet.create({
    mainBlock: {
        flexDirection: 'row',
    },
    input: {
        width: '60%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: APP_COLORS.mountbattenPink,
    },
    button: {
    }
})