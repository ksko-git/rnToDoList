import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { APP_COLORS } from './Enums/APP_COLORS';

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
        backgroundColor: APP_COLORS.loopTallinn,

    },
    navbarText: {
        color: APP_COLORS.pastelPink,
        fontSize: 20
    },
})
