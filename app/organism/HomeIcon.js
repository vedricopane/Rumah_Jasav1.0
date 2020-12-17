import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import normalize from "react-native-normalize";

const HomeIcon = (props) => {
  return (
    <View style={styles.cardPilihJasa}>
      <View style={styles.cardJasa}>
        <Image source={props.Gambar} style={styles.iconJasa} />
      </View>
      <Text style={styles.textJasa}>{props.Name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // cardJasa: {
  //   width: 106,
  //   height: 111,
  //   marginTop: 20,
  //   margin: 4,
  //   backgroundColor: "white",
  //   borderWidth: 1,
  //   borderColor: "#E4E4E4",
  //   borderRadius: 10,
  // },
  cardPilihJasa: {
    width: normalize(106),
    height: normalize(130),
    marginTop: normalize(20),
    margin: normalize(4),
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: normalize(20),
    justifyContent: "center",
    alignItems: "center",
  },
  cardJasa: {
    borderColor: "#E42313",
    borderWidth: 1,
    width: normalize(90),
    height: normalize(90),
    borderRadius: normalize(45),
    // kalau mau bikin lingkaran radiusnya itu setengah dari widh sama height
    justifyContent: "center",
    alignItems: "center",
    // position: "relative",
  },
  iconJasa: {
    width: normalize(55),
    height: normalize(55),
    justifyContent: "center",
    alignItems: "center",
  },
  textJasa: {
    fontSize: normalize(13),
    fontWeight: "200",
    marginTop: 10,
    color: "black",

    // marginTop: 50
  },
});
export default HomeIcon;
