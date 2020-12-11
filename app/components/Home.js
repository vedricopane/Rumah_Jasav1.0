import React from "react";
import { View, StyleSheet, Text } from "react-native";
import artIcon from "../assets/icons/artIcon.png";
import HomeIcon from "../organism/HomeIcon";
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.saldo}></View>
      <Text style={styles.textPilihJasa}>Pilih Jasa</Text>
      <View style={styles.wrapperCardJasa}>
        <HomeIcon Name="ART" Gambar={artIcon} />
        <HomeIcon Name="ART" Gambar={artIcon} />
        <HomeIcon Name="ART" Gambar={artIcon} />
      </View>

      <View style={styles.wrapperCardJasa}>
        <HomeIcon Name="ART" Gambar={artIcon} />
        <HomeIcon Name="ART" Gambar={artIcon} />
        <HomeIcon Name="ART" Gambar={artIcon} />
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
  textPilihJasa: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 7,
    color: "black",
    marginTop: 50,
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
