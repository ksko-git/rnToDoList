import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { APP_COLORS } from '../../enums/APP_COLORS';
import { AppText } from './AppText';

export const AppButton = ({ children, onPress, color=APP_COLORS.LIGHT_GREY }) => {
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} >
            <View style={{ ...styles.button, backgroundColor: color }}>
                <AppText style={styles.text}>{children}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: '600',
        color:APP_COLORS.WHITE
    }
})