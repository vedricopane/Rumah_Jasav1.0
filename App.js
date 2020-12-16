import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginNavigator from "./app/navigation/TabNavigator";
import * as Font from "expo-font";

import firebase from "firebase";
import { firebaseConfig } from "./app/Firebase";
firebase.initializeApp(firebaseConfig);
export default function App() {
  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
}
