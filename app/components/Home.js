import { Row } from "native-base";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import artIcon from "../assets/icons/artIcon.png";
import tkKebunIcon from "../assets/icons/tkKebunIcon.png";
import driverIcon from "../assets/icons/driverIcon.png";
import babysitterIcon from "../assets/icons/babysitterIcon.png";
import satpamIcon from "../assets/icons/satpamIcon.png";
import asistenPribadiIcon from "../assets/icons/asistenPribadiIcon.png";

import HomeIcon from "../organism/HomeIcon";
import SaldoIcon from "../assets/icons/saldoIcon.png";
import shape from "../assets/Background/Shape.png";
import normalize from "react-native-normalize";
import LogoPutih from "../assets/icons/Rumah_Jasa_1.png";
import Foto from "../assets/icons/tuyul.jpg";

const Home = ({navigation}) => {
  return (
    <View>
      <ImageBackground source={shape} style={styles.ImgHeader}>
        <View style={styles.centerscreen}>
          <Image source={LogoPutih} style={styles.logo} />
        </View>
        <View style={styles.centerscreen}>
          <View style={styles.flex}>
            <Image style={styles.fotoprofil} source={Foto} />
            <View
              style={{
                paddingHorizontal: normalize(38),
                paddingTop: normalize(10),
              }}
            >
              <Text
                style={{
                  fontSize: normalize(18),
                  fontWeight: "300",
                  color: "white",
                }}
              >
                Selamat Datang,
              </Text>
              <Text
                style={{
                  fontSize: normalize(20),
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Tiana Rosser
              </Text>
            </View>
          </View>
        </View>
        </ImageBackground>
        <View style={styles.containerLeft}>
          <View style={styles.saldo}>
            <View style={styles.wrapperSaldo}>
              <Image source={SaldoIcon} />
              <View style={styles.wrapperTextSaldo}>
                <Text style={styles.textSaldo}>Saldo</Text>
                <Text style={styles.textNominal}>Rp 200.000,-</Text>
              </View>
              <View style={styles.line} />
              <Text style={styles.textTopUp}>Top Up</Text>
            </View>
          </View>
          <Text style={styles.textPilihJasa}>Pilih Jasa</Text>
          <View style={styles.wrapperCardJasa}>
            <TouchableOpacity onPress={()=> navigation.navigate("ART")}>
              <HomeIcon Name="ART" Gambar={artIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("TukangKebun")}>
              <HomeIcon Name="Tukang Kebun" Gambar={tkKebunIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("Driver")}>
              <HomeIcon Name="Driver" Gambar={driverIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.wrapperCardJasa}>
            <TouchableOpacity onPress={()=> navigation.navigate("Babysitter")}>
              <HomeIcon Name="Babysitter" Gambar={babysitterIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("Satpam")}>
              <HomeIcon Name="Satpam" Gambar={satpamIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("AsistenPribadi")}>
              <HomeIcon Name="Asisten Pribadi" Gambar={asistenPribadiIcon} />
            </TouchableOpacity>
          </View>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  fotoprofil: {
    borderWidth: 2,
    width: 70,
    height: 70,
    borderRadius: 300,
    marginLeft: 10,
  },
  centerscreen: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: normalize(40),
    width: 100,
    height: 100,
  },
  ImgHeader: {
    width: "100%",
    height: Dimensions.get("window").height * 0.40,
  },
  containerLeft: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#76a6ef'
  },
  container: {
    flex: 1,
  },
  textPilihJasa: {
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 7,
    color: "black",
    marginTop: normalize(50),
  },
  saldo: {
    marginTop: normalize(-30),
    width: 280,
    height: 55,
    backgroundColor: "white",
    position: "relative",
    borderRadius: 69,
    elevation: 1,
  },
  wrapperSaldo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperTextSaldo: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 6,
  },
  textSaldo: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#E42313",
  },
  textNominal: {
    fontSize: 14,
    fontWeight: "100",
    letterSpacing: 1,
  },
  line: {
    height: 33,
    width: 2,
    backgroundColor: "black",
    marginLeft: 10,
  },
  textTopUp: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    paddingLeft: 10,
  },
  wrapperCardJasa: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center'
  },
  flex: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Home;
