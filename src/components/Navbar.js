import React from 'react';
import {View, StyleSheet} from 'react-native';
import { APP_COLORS } from '../enums/APP_COLORS';
import { AppText } from './ui/AppText';

export const Navbar = props => {
    return (
        <View style={styles.navbar}>
            <AppText style={styles.navbarText}>{props.appTitle}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {        
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 12,
        backgroundColor: APP_COLORS.mainBackground,

    },
    navbarText: {
        color: APP_COLORS.mainText,
        fontSize: 20
    },
})
