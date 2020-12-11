import React from "react";
import { View, StyleSheet, Text } from "react-native";
import HomeIcon from "../organism/HomeIcon";
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.saldo}></View>
      <Text style={styles.text}>Pilih Jasa</Text>
      <View style={styles.wrapperCardJasa}>
        <HomeIcon Nama={"ART"} />
        <HomeIcon Nama={"ART"} />
        <HomeIcon Nama={"ART"} />
      </View>

      <View style={styles.wrapperCardJasa}>
        <HomeIcon Nama={"ART"} />
        <HomeIcon Nama={"ART"} />
        <HomeIcon Nama={"ART"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#76a6ef'
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 6,
    color: "black",
    marginTop: 25,
  },
  saldo: {
    width: 250,
    height: 55,
    backgroundColor: "white",
    position: "relative",
    marginTop: 250,
    borderRadius: 69,
    elevation: 1,
  },

  wrapperCardJasa: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Home;
