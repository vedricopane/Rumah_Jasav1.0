import React from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Content, Tab, Tabs, Button, Text } from "native-base";

import Tab1 from "./PemesananProses";
import Tab2 from "./PemesananSelesai";

const Pemesanan = () => {
  return (
    <Container>
      <Button full 
      backgroundColor='#e42313'>
            <Text
            style={styles.TabText}>Pesanan</Text>
      </Button>
      <Tabs >
        <Tab heading="Dalam Proses">
          <Tab1 />
        </Tab>
        <Tab heading="Selesai">
          <Tab2 />
        </Tab>
      </Tabs>
    </Container>
  );
};

const styles = StyleSheet.create({
  TabText:{
    color:'#fff',
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'normal',
  }
});

export default Pemesanan;
