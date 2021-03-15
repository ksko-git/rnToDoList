import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

import { EditModal } from '../components/EditModal';
import { AppButton } from '../components/ui/AppButton';
import { AppCard } from '../components/ui/AppCard';
import { APP_COLORS } from '../enums/APP_COLORS';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export const TodoScreen = () => {

    const { todos, updateTodo, removeTodo } = useContext(TodoContext)
    const { todoId, changeScreen } = useContext(ScreenContext)

    const todo = todos.find(t => t.id === todoId)

    // модальное (всплывающее) окно не видно по умолчанию
    const [modal, setModal] = useState(false)

    const saveHandler = async title => {
        // передаем пропсы в App
        await updateTodo(todo.id, title)
        // закрываем модальное окно
        setModal(false)
    }

    return(
        <View>

            <EditModal 
                value={todo.title}
                visible={modal} 
                // закрытие модального окна при нажатии
                onCancel={() => setModal(false)} 
                onSave={saveHandler}
            />

            <AppCard style={styles.card}>
                <Text>{todo.title}</Text>
                {/* показать модальное окно */}
                <AppButton onPress={() => setModal(true)} color={APP_COLORS.CYPRUS}>
                    <FontAwesome name='edit' size={20} color={APP_COLORS.WHITE} />
                </AppButton>
            </AppCard>

            
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton onPress={() => changeScreen(null)} color={APP_COLORS.LIGHT_GREY}>
                        <Ionicons name='arrow-back-circle-outline' size={20} color={APP_COLORS.WHITE} />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton onPress={() => removeTodo(todo.id)} color={APP_COLORS.DANGER}>
                        <MaterialIcons name='highlight-remove' size={20} color={APP_COLORS.WHITE} />
                    </AppButton>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 20
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: Dimensions.get('window').width / 3.4
    }
})