import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Tab = ({ tab, icon, onPress, color }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && <AntDesign name={icon} size={24} color={color} />}
      <Text style={{ color }}>{tab.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
});

export default Tab;
