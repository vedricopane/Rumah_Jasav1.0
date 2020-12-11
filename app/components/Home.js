import { Row } from "native-base";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import artIcon from "../assets/icons/artIcon.png";
import HomeIcon from "../organism/HomeIcon";
import SaldoIcon from "../assets/icons/saldoIcon.png"

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.saldo}>
        <View style={styles.wrapperSaldo}>
          <Image 
            source={SaldoIcon}
          />
          <View style={styles.wrapperTextSaldo}>
            <Text style={styles.textSaldo}>Saldo</Text>
            <Text style={styles.textNominal}>Rp 200.000,-</Text>
          </View>
          <View style={styles.line}/>
          <Text style={styles.textTopUp}>Top Up</Text>
        </View>
      </View>
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
    width: 280,
    height: 55,
    backgroundColor: "white",
    position: "relative",
    marginTop: 250,
    borderRadius: 69,
    elevation: 1,
  },
  wrapperSaldo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },
  wrapperTextSaldo: {
    flexDirection: 'column', 
    justifyContent: 'space-around',
    paddingLeft: 6
  },
  textSaldo: {
    fontSize: 16, 
    fontWeight: 'bold', 
    letterSpacing: 2, 
    color: '#E42313'
  },
  textNominal: {
    fontSize: 14,
    fontWeight: '100',
    letterSpacing: 1
  },
  line: {
    height: 33, 
    width: 2, 
    backgroundColor: 'black', 
    marginLeft: 10
  },
  textTopUp: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10
  },
  wrapperCardJasa: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Home;
