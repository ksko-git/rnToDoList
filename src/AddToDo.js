import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { app_colors } from './enums/app_colors';

export const AddToDo = ({ onSubmit }) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value) // добавить в стипок
            setValue('') // очистить input
        } else {
            Alert.alert('Название дела не может оставаться пустым!')
        }        
    }

    return (
        <View style={styles.mainBlock}>
            <TextInput 
                style={styles.input} 
                onChangeText={setValue}
                value={value}
                placeholder="Введите название дела..."
                autoCorrect={false} // убрать автоисправление вводимых слов
            />
            <Button 
                style={styles.button} 
                title="Добавить"
                onPress={pressHandler} 
            />
        </View>        
    )
}

const styles = StyleSheet.create({
    mainBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '60%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: app_colors.mountbattenPink,
        padding: 10
    },
    button: {
    }
})