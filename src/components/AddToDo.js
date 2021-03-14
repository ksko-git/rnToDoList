import React, { useState } from 'react';
import { View, StyleSheet, Alert, Keyboard } from 'react-native';
import { APP_COLORS } from '../enums/APP_COLORS';
import { AntDesign } from '@expo/vector-icons';
import { AppTextInput } from './ui/AppTextInput'

export const AddToDo = ({ onSubmit }) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value) // добавить в стипок
            setValue('') // очистить input
            Keyboard.dismiss()
        } else {
            Alert.alert('Название дела не может оставаться пустым!')
        }        
    }

    return (
        <View style={styles.mainBlock}>
            <AppTextInput 
                style={styles.input} 
                onChangeText={setValue}
                value={value}
                placeholder="Введите название дела..."
                placeholderTextColor={APP_COLORS.lightPurple}
                autoCorrect={false}
            />
            <AntDesign.Button onPress={pressHandler} name='pluscircleo'>
                Добавить
            </AntDesign.Button>
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
        borderBottomColor: APP_COLORS.input,
        padding: 10
    }
})