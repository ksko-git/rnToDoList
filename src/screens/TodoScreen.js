import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

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
                <AppButton onPress={() => setModal(true)} color={APP_COLORS.CYPRUS}>
                    <FontAwesome name='edit' size={20} color={APP_COLORS.WHITE} />
                </AppButton>
            </AppCard>

            
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton onPress={goBack} color={APP_COLORS.LIGHT_GREY}>
                        <Ionicons name='arrow-back-circle-outline' size={20} color={APP_COLORS.WHITE} />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton onPress={() => onRemove(todo.id)} color={APP_COLORS.DANGER}>
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