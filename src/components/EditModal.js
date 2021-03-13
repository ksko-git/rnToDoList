import React, { useState } from 'react';
import { StyleSheet, View, Button, Modal, Alert } from 'react-native';
import { APP_COLORS } from '../enums/APP_COLORS';
import { AppTextInput } from './ui/AppTextInput';


export const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value) // заголовок todo, взятый из TodoScreen

    const saveHandler = () => {
        // ошибка, если удалили весь title
        if (title.trim().length < 3) {
            Alert.alert(
                "Ошибка!", 
                `Минимальная длина названия 3 символа. Вы ввели ${
                    title.trim().length
                } символов.`
            )
        } else {
            // сохраняем state
            onSave(title)
        }
    }

    return(
        <Modal visible={visible} animationType='slide' >
            <View style={styles.wrap}>
                <AppTextInput 
                    value={title} // state
                    onChangeText={setTitle}
                    style={styles.input} 
                    placeholder="Введите новое название..."
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button title="Отменить" onPress={onCancel} color={APP_COLORS.DANGER} />
                    <Button title="Сохранить" onPress={saveHandler} />
                </View>
            </View>            
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1, // по высоте экрана
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: APP_COLORS.DANGER,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})