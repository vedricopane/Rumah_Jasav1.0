import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const HomeIcon = (props) => {
  return (
    <View style={styles.cardPilihJasa}>
      <View style={styles.cardJasa}>
        <Image source={props.Gambar} style={styles.iconJasa} />
        <Text style={styles.textJasa}>{props.Nama}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardJasa: {
    width: 106,
    height: 111,
    marginTop: 20,
    margin: 4,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 10,
  },
  cardPilihJasa: {
    width: 106,
    height: 120,
    marginTop: 20,
    margin: 4,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardJasa: {
    borderColor: "#E42313",
    borderWidth: 1,
    width: 66,
    height: 66,
    flex: 1,
    borderRadius: 66 / 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 20,
  },
  iconJasa: {
    width: 50,
    height: 50,
  },
  textJasa: {
    fontSize: 13,
    fontWeight: "200",
    color: "black",
    // marginTop: 50
  },
});
export default HomeIcon;
