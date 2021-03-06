import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Pemesanan from "../components/Pemesanan";
import Profil from "../components/Profil";
import TabBar from "../components/TabBar";

import Register from "../components/Register";

import Login from "../components/Login";
import ART from "../components/ART";
import TukangKebun from "../components/TukangKebun";
import Driver from "../components/Driver";
import Babysitter from "../components/Babysitter";
import Satpam from "../components/Satpam";
import AsistenPribadi from "../components/AsistenPribadi";
import EditProfil from "../components/DetailProfil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from "../components/Splash";

const Tab = createBottomTabNavigator();
const OrderStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const LoginStack = createStackNavigator();

class LoginNavigator extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      key: false,
    };
  }
  async componentDidMount() {
    await AsyncStorage.getItem("UserData", (error, result) => {
      if (result) {
        this.setState({ key: true, loading: false });
        console.log("Data :" + result);
      } else {
        this.setState({ loading: false });
      }
    });
  }
  render() {
    const { key, loading } = this.state;
    if (!loading) {
      return (
        <LoginStack.Navigator>
          {key ? (
            <>
              <LoginStack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <LoginStack.Screen
                name="ART"
                component={ART}
                options={{
                  headerShown: false,
                }}
              />
              <LoginStack.Screen
                name="TukangKebun"
                component={TukangKebun}
                options={{
                  headerShown: false,
                }}
              />
              <LoginStack.Screen
                name="Driver"
                component={Driver}
                options={{
                  headerShown: false,
                }}
              />
              <LoginStack.Screen
                name="Babysitter"
                component={Babysitter}
                options={{
                  headerShown: false,
                }}
              />
              <LoginStack.Screen
                name="Satpam"
                component={Satpam}
                options={{
                  headerShown: false,
                }}
              />
              <LoginStack.Screen
                name="AsistenPribadi"
                component={AsistenPribadi}
                options={{
                  headerShown: false,
                }}
              />
              <LoginStack.Screen
                name="EditProfil"
                component={EditProfil}
                options={{
                  headerShown: false,
                }}
              />
            </>
          ) : (
            <>
              <LoginStack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false,
                }}
              />
              <LoginStack.Screen
                name="Register"
                component={Register}
                options={{
                  headerShown: false,
                }}
              />
            </>
          )}
        </LoginStack.Navigator>
      );
    } else {
      return <SplashScreen />;
    }
  }
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ icon: "home" }}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Pesanan"
        component={OrderStackScreen}
        initialParams={{ icon: "medicinebox" }}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileStackScreen}
        initialParams={{ icon: "user" }}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const OrderStackScreen = () => {
  return (
    <OrderStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#E42313",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 17,
        },
      }}
    >
      <OrderStack.Screen
        name="Pesanan"
        component={Pemesanan}
        options={{ headerShown: false }}
      />
    </OrderStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#E42313",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 17,
        },
      }}
    >
      <ProfileStack.Screen
        name="Profil"
        component={Profil}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};

export default LoginNavigator;
