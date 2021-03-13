import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { EditModal } from '../components/EditModal';
import { AppButton } from '../components/ui/AppButton';
import { AppCard } from '../components/ui/AppCard';
import { APP_COLORS } from '../enums/APP_COLORS';

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
    // модальное (всплывающее) окно не видно по умолчанию
    const [modal, setModal] = useState(false)

    const saveHandler = title => {
        // передаем пропсы в App
        onSave(todo.id, title)
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
                <AppButton onPress={() => setModal(true)} color={APP_COLORS.DARK_SEA_GREEN}>
                    Ред.
                </AppButton>
            </AppCard>

            
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton onPress={goBack} color={APP_COLORS.LIGHT_GREY}>
                        Назад
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton onPress={() => onRemove(todo.id)} color={APP_COLORS.DANGER}>
                        Удалить 
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
        width: '40%'
    }
})