import React, { useState, useEffect } from 'react';
import { 
    View, 
    StyleSheet, 
    FlatList, 
    Image, 
    Dimensions 
} from 'react-native';
import { AddToDo } from '../components/AddToDo';
import { ToDo } from '../components/ToDo';
import { LAYOUT_BLANKS } from '../enums/LAYOUT_BLANKS';

export const MainScreen = ({ addToDo, todos, removeTodo, openTodo }) => {

    const [deviceWidth, setDeviceWidth] = 
        useState(Dimensions.get('window').width - LAYOUT_BLANKS.paddingHorizontal * 2)

    // запустится 1 раз при инициализации компонента
    //при изменении ширины экрана, вызывается функция,
    useEffect(() => {
        // определяющая новое значение ширины экрана
        const setNewWidth = () => {
            const width = 
                Dimensions.get('window').width - LAYOUT_BLANKS.paddingHorizontal * 3
            setDeviceWidth(width)
        }

        Dimensions.addEventListener('change', setNewWidth)

        return() => {
            // убрать listner, чтобы он не чудил на других экранах
            Dimensions.removeEventListener('change', setNewWidth)
        }
    })

    let content = (
        <View style={{ width: deviceWidth }}>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({ item }) => (
                    <ToDo todo={item} onRemove={removeTodo} onOpen={openTodo} /> 
                )}
            />
        </View>
    )

    if (todos.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image 
                    source={require('../../assets/no-items.png')} 
                    style={styles.image} 
                />
            </View>
        )
    }

    return(
        <View>
            <AddToDo onSubmit={addToDo} />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})