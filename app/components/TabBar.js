import React, { useState } from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Tab from './Tab';

const {width} = Dimensions.get('screen')

const TabBar = ({ state, navigation }) => {
    const [selected, setSelected] = useState('Home');
    const { routes } = state;
    const renderColor = (currentTab) => (currentTab === selected ? '#E42313' : '#706F6F');

    const handlePress = (activeTab, index) => {
        if  (state.index !== index) {
            setSelected(activeTab);
            navigation.navigate(activeTab);
        }
    };  

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {routes.map((route, index) => (
                    <Tab
                        tab={route}
                        icon={route.params.icon}
                        onPress={() => handlePress(route.name, index)}
                        color={renderColor(route.name)}
                        key={route.key} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        borderRadius: 69,
        elevation: 5
        // width: 250
    },
    wrapper: {
        position: 'absolute',
        bottom: 10,
        width,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default TabBar;