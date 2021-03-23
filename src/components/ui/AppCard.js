import React from 'react';
import { StyleSheet, View } from 'react-native';
import { APP_COLORS } from '../../enums/APP_COLORS'

export const AppCard = props => (
    // возможность добавить стили извне
    <View style={ {...styles.default, ...props.style} }>{props.children}</View>
)

const styles = StyleSheet.create({
    default: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        borderRadius: 10,
        backgroundColor: APP_COLORS.mainText,
        // только для android
        elevation: 8
    }
})