import React, { 
    useState, 
    useEffect, 
    useContext, 
    useCallback 
} from 'react';
import { 
    View, 
    StyleSheet, 
    FlatList, 
    Image, 
    Dimensions 
} from 'react-native';
import { AddToDo } from '../components/AddToDo';
import { ToDo } from '../components/ToDo';
import { AppLoader } from '../components/ui/AppLoader';
import { ScreenContext } from '../context/screen/screenContext';
import { TodoContext } from '../context/todo/todoContext';
import { LAYOUT_BLANKS } from '../enums/LAYOUT_BLANKS';

export const MainScreen = () => {

    const { 
        todos, 
        loading, 
        error, 
        fetchTodos, 
        addToDo, 
        removeTodo 
    } = useContext(TodoContext)
    const { changeScreen } = useContext(ScreenContext)

    const [deviceWidth, setDeviceWidth] = useState(
        Dimensions.get('window').width - LAYOUT_BLANKS.paddingHorizontal * 2
    )

    // Этот хук поможет избежать лишних вызовов этой функции 
    // во время работы приложения,
    // ведь она вызывается только один раз, при загрузке приложения.
    // оборачивает в Callback метод fetchTodos()     
    const loadTodos = useCallback(
        async () => 
            await fetchTodos(), 
            // и складывает его в список зависимостей
            [fetchTodos]
    )
    useEffect(() => {
        loadTodos()
    }, [])

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

    if (loading) {
        return <AppLoader />
    }

    let content = (
        <View style={{ width: deviceWidth }}>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({ item }) => (
                    <ToDo todo={item} onRemove={removeTodo} onOpen={changeScreen} /> 
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