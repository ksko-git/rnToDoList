import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { APP_COLORS } from '../enums/APP_COLORS';
import { AppText } from './ui/AppText';

export const Navbar = props => {
    return (
        <View 
            style={{
                ...styles.navbar, 
                ...Platform.select({
                    ios: styles.navbarIOS,
                    android: styles.navbarAndroid
                }) 
            }}
        >
            <AppText 
                style={{
                    ...styles.navbarText, 
                    ...Platform.select({
                        ios: styles.navbarTextIOS,
                        android: styles.navbarTextAndroid
                    })
                }}
            >
                {props.appTitle}
            </AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {        
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 12,
    },
    navbarIOS: {
        backgroundColor: APP_COLORS.WHITE,
        borderBottomWidth: 1.6,
        borderBottomColor: APP_COLORS.CYPRUS
    },
    navbarAndroid: {
        backgroundColor: APP_COLORS.CYPRUS
    },
    navbarText: {
        fontSize: 20,
        fontWeight: '600'
    },
    navbarTextIOS: {
        color: APP_COLORS.CYPRUS,
    },
    navbarTextAndroid: {
        color: APP_COLORS.WHITE,
    }
})
