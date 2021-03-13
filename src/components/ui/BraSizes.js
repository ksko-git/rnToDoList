import React from 'react';
import { View, StyleSheet } from 'react-native';
import { APP_COLORS } from '../../enums/APP_COLORS';
import { AppTextInput } from './AppTextInput';
import { AppText } from './AppText';

export const BraSizes = () => {
    return (
        <View style={styles.mainBlock}>  
            <AppTextInput style={styles.headerText}>Размеры</AppTextInput>  
            <View style={styles.braSizesMainBlock}>
                <View style={styles.sizeBlock}>
                    <View style={styles.countryCodeBlock} >
                        <AppTextInput style={styles.countryCodeTitle}>IT</AppTextInput>
                    </View>
                    <AppInput 
                        style={styles.input} 
                        placeholder="2C"
                        placeholderTextColor={APP_COLORS.secondaryText}
                        maxLength={3}
                        autoCorrect={false} 
                    />
                </View> 
                <View style={styles.sizeBlock}>
                    <View style={styles.countryCodeBlock} >
                        <AppTextInput style={styles.countryCodeTitle}>EU</AppTextInput>
                    </View>
                    <AppInput 
                        style={styles.input} 
                        placeholder="75C"
                        placeholderTextColor={APP_COLORS.secondaryText}
                        maxLength={3}
                        autoCorrect={false} 
                    />
                </View>
                <View style={styles.sizeBlock}>
                    <View style={styles.countryCodeBlock} >
                        <AppTextInput style={styles.countryCodeTitle}>ES</AppTextInput>
                    </View>
                    <AppInput 
                        style={styles.input} 
                        placeholder="85C"
                        placeholderTextColor={APP_COLORS.secondaryText}
                        maxLength={3}
                        autoCorrect={false} 
                    />
                </View>
            </View> 
            <View style={styles.braSizesMainBlock}>
                <View style={styles.sizeBlock}>
                    <View style={styles.countryCodeBlock} >
                        <AppTextInput style={styles.countryCodeTitle}>FR</AppTextInput>
                    </View>
                    <AppInput 
                        style={styles.input} 
                        placeholder="85C"
                        placeholderTextColor={APP_COLORS.secondaryText}
                        maxLength={3}
                        autoCorrect={false} 
                    />
                </View>
                <View style={styles.sizeBlock}>
                    <View style={styles.countryCodeBlock} >
                        <AppTextInput style={styles.countryCodeTitle}>UK</AppTextInput>
                    </View>
                    <AppInput 
                        style={styles.input} 
                        placeholder="34C"
                        placeholderTextColor={APP_COLORS.secondaryText}
                        maxLength={3}
                        autoCorrect={false} 
                    />
                </View>
                <View style={styles.sizeBlock}>
                    <View style={styles.countryCodeBlock} >
                        <AppTextInput style={styles.countryCodeTitle}>USA</AppTextInput>
                    </View>
                    <AppInput 
                        style={styles.input} 
                        placeholder="34C"
                        placeholderTextColor={APP_COLORS.secondaryText}
                        maxLength={3}
                        autoCorrect={false} 
                    />
                </View>  
            </View>                          
        </View>       
    )
}
 const styles = StyleSheet.create({
    mainBlock: {
        borderWidth: 2,
        padding: 10,
        backgroundColor: APP_COLORS.tertiaryBackground
    },
    headerText: {
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        paddingBottom: 8
    },
    braSizesMainBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 6,
    },
    sizeBlock: {
        width: 64,
    },
    countryCodeBlock: {        
        borderStyle: 'solid',      
        borderWidth: 1.5,
        borderColor: APP_COLORS.secondaryBackground,  
        backgroundColor: APP_COLORS.input 
    },
    countryCodeTitle: {   
        textAlign: 'center',      
    },
    input: {
        textAlign: 'center',
    },
 })