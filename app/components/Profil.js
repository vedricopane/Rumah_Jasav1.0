import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Profil = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profil User Penggunagit</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default Profil;