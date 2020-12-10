import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Pemesanan from '../components/Pemesanan';
import Profil from '../components/Profil';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();
const OrderStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const TabNavigator = () => {
    return <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen 
            name='Beranda' 
            component={Home} 
            initialParams={{icon: 'home'}} />
        <Tab.Screen 
            name='Pemesanan'
            component={OrderStackScreen} 
            initialParams={{icon: 'medicinebox'}} />
        <Tab.Screen 
            name='Profil' 
            component={ProfileStackScreen} 
            initialParams={{icon: 'user'}} />
    </Tab.Navigator>
}

const OrderStackScreen = () => {
    return (
        <OrderStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#E42313",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: 17
        }
      }}>
            <OrderStack.Screen 
            name='Pesanan'
            component={Pemesanan} />
        </OrderStack.Navigator>
    )
}

const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#E42313",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: 17
        }
      }}>
            <ProfileStack.Screen 
            name='Profil'
            component={Profil} />
        </ProfileStack.Navigator>
    )
}

export default TabNavigator;