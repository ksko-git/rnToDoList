import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { app_colors } from './enums/app_colors';

export const Navbar = props => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.navbarText}>{ props.appTitle }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {        
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 12,
        backgroundColor: app_colors.loopTallinn,

    },
    navbarText: {
        color: app_colors.pastelPink,
        fontSize: 20
    },
})
