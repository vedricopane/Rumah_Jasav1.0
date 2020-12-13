import React from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Content, Tab, Tabs, Text } from "native-base";
import normalize from "react-native-normalize";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Tab1 from "./PemesananProses";
import Tab2 from "./PemesananSelesai";
const tab = createMaterialTopTabNavigator();

const Pemesanan = () => {
  return (
    <Container>
      <Header style={styles.header}>
        <Text style={styles.TabText}>Pesanan</Text>
      </Header>
      <tab.Navigator initialRouteName="Dalam Proses"      >
        <tab.Screen
        name="Dalam Proses"
        component={Tab1} />
        <tab.Screen
        name="Selesai"
        component={Tab2} />
      </tab.Navigator>
    </Container>
    
  );
};

const styles = StyleSheet.create({
  TabText:{
    color:'#fff',
    fontFamily: "Roboto",
    fontSize: normalize(17),
    fontWeight: '900',
    lineHeight: normalize(22),
    fontStyle: 'normal',
  },
  header:{
    backgroundColor:'#e42313',
    alignItems:'center',
    justifyContent:'center',
    height: normalize(53),
  },
});

export default Pemesanan;
