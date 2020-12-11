import React from "react";
import { View, StyleSheet, Text } from "react-native";

const HomeIcon = (props) => {
  return (
    <View style={styles.cardJasa}>
      <View>
        <Text>{props.Nama}</Text>
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
});
export default HomeIcon;
