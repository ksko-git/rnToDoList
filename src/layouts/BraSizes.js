import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { app_colors } from '../enums/app_colors';

export const BraSizes = () => {

    const [value, setValue] = useState('')

    return (
        <View style={styles.mainBlock}>    
            <View style={styles.braSizesMainBlock}>
                <View style={styles.sizeBlock}>
                    <View style={styles.countryCodeBlock} >
                        <Text style={styles.countryCodeTitle}>IT</Text>
                    </View>
                    <TextInput 
                        style={styles.input} 
                        placeholder="2C"
                        autoCorrect={false} 
                    />
                </View> 
                <View style={styles.sizeBlock}>
                    <View style={styles.countryCodeBlock} >
                        <Text style={styles.countryCodeTitle}>EU</Text>
                    </View>
                    <TextInput 
                        style={styles.input} 
                        placeholder="75C"
                        autoCorrect={false} 
                    />
                </View>
                <View style={styles.sizeBlock}>
                    <View style={styles.countryCodeBlock} >
                        <Text style={styles.countryCodeTitle}>ES</Text>
                    </View>
                    <TextInput 
                        style={styles.input} 
                        placeholder="85C"
                        autoCorrect={false} 
                    />
                </View>
            </View> 
            <View style={styles.braSizesMainBlock}>
                <View style={styles.sizeBlock}>
                    <View style={styles.countryCodeBlock} >
                        <Text style={styles.countryCodeTitle}>FR</Text>
                    </View>
                    <TextInput 
                        style={styles.input} 
                        placeholder="85C"
                        autoCorrect={false} 
                    />
                </View>
                <View style={styles.sizeBlock}>
                    <View style={styles.countryCodeBlock} >
                        <Text style={styles.countryCodeTitle}>UK</Text>
                    </View>
                    <TextInput 
                        style={styles.input} 
                        placeholder="34C"
                        autoCorrect={false} 
                    />
                </View>
                <View style={styles.sizeBlock}>
                    <View style={styles.countryCodeBlock} >
                        <Text style={styles.countryCodeTitle}>USA</Text>
                    </View>
                    <TextInput 
                        style={styles.input} 
                        placeholder="34C"
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
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        padding: 10,
    },
    braSizesMainBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 6,
    },
    sizeBlock: {
        width: 64,
        // height: 44
    },
    countryCodeBlock: {        
        borderStyle: 'solid',      
        borderWidth: 2,
        borderColor: app_colors.deepLavender,        
    },
    countryCodeTitle: {        
        fontSize: 20,
        textAlign: 'center',
        color: app_colors.loopTallinn,        
    },
    input: {
        borderStyle: 'solid',
        fontSize: 20,
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: app_colors.lavender,
        padding: 10
    },
 })