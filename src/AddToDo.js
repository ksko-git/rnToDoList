import React, { useState  } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { APP_COLORS } from './Enums/APP_COLORS';

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
        borderBottomColor: APP_COLORS.mountbattenPink,
        padding: 10
    },
    button: {
    }
})