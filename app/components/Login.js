import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.saldo}></View>
      <Text style={styles.text}>Pilih Jasa</Text>
      <View style={styles.wrapperCardJasa}>
        <View style={styles.cardJasa}>
          <View>
            <Text>Asisten Rumah Tangga</Text>
          </View>
        </View>
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
  wrapperCardJasa: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Login;
