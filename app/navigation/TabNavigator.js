import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Pemesanan from '../components/Pemesanan';
import Profil from '../components/Profil';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen 
            name='Beranda' 
            component={Home} 
            initialParams={{icon: 'home'}} />
        <Tab.Screen 
            name='Pemesanan'
            component={Pemesanan} 
            initialParams={{icon: 'medicinebox'}} />
        <Tab.Screen 
            name='Profil' 
            component={Profil} 
            initialParams={{icon: 'user'}} />
    </Tab.Navigator>
}

export default TabNavigator;