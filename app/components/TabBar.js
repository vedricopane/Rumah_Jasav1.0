import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Tab from "./Tab";
import normalize from "react-native-normalize";

const { width } = Dimensions.get("screen");

const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState("Home");
  const { routes } = state;
  const renderColor = (currentTab) =>
    currentTab === selected ? "#E42313" : "#706F6F";

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.8,
    shadowRadius: 0.3,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    borderRadius: normalize(69),
    elevation: 5,
    marginLeft: normalize(10),
    marginRight: normalize(10),
    // width: 250
  },
  wrapper: {
    position: "absolute",
    bottom: 15,
    width: 350,
    width,
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: 5,
  },
});

export default TabBar;
