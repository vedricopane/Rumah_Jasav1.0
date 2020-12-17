import React from "react";
import { StyleSheet, View, Image, Dimensions, ScrollView } from "react-native";
import splash from "../assets/img/Splash.png";

function SplashScreen() {
  return (
    <ScrollView style={styles.screen}>
      <View style={{ width: "100%" }}>
        <Image
          source={splash}
          style={{
            width: "100%",
            marginTop: Math.round(Dimensions.get("window").height / 1 / 7),
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
  },
});

export default SplashScreen;
