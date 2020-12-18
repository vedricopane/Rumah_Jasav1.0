import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Alert,
  Dimensions,
} from "react-native";
import {
  Container,
  Separator,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  Header,
  Button,
} from "native-base";
import normalize from "react-native-normalize";
import Logout from "../assets/icons/Logout.png";
import Foto from "../assets/icons/tuyul.jpg";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as Updates from "expo-updates";

class Profil extends React.Component {
  constructor() {
    super();
    this.state = {
      Modal: false,
      NamaLengkap: "",
      Email: "",
      NomorHP: "",
    };
  }
  async componentDidMount() {
    await AsyncStorage.getItem("UserData", (error, result) => {
      if (result) {
        const parsed = JSON.parse(result);
        console.log(parsed);
        this.setState({
          loading: false,
          NamaLengkap: parsed.NamaLengkap,
          Email: parsed.Email,
          NomorHP: parsed.NomorHP,
        });
      } else {
        this.setState({ loading: false });
      }
    });
  }
  __doLogout = async () => {
    try {
      await AsyncStorage.removeItem("UserData");
      Updates.reloadAsync();
    } catch (exception) {
      Alert.alert("❌ Gagal Logout ❌", "Hubungi Penyedia jasa");
    }
  };
  render() {
    const styles = StyleSheet.create({
      buttonlogin: {
        flex: 1,
        backgroundColor: "#E42313",
        marginTop: 30,
        marginBottom: 20,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      },
      buttonlogin2: {
        flex: 1,
        backgroundColor: "#2E9FDF",
        marginTop: 30,
        marginBottom: 20,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      },
      baseText: {},
      titleText: {
        fontSize: 20,
        fontWeight: "500",
        color: "#e42313",
      },
      isiText: {
        fontSize: 14,
        fontStyle: "normal",
      },
      backgroundcolor: {
        backgroundColor: "#fff",
      },
      TitleName: {
        fontSize: 20,
        fontWeight: "bold",
      },
      IsiName: {
        fontSize: 12,
        fontWeight: "300",
      },
      Marginname: {
        marginLeft: 10,
      },
      TabText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
        fontStyle: "normal",
      },
      flex: {
        flexDirection: "row",
        height: 100,
        marginTop: 20,
      },
      fotoprofil: {
        borderWidth: 2,
        width: 70,
        height: 70,
        borderRadius: 300,
        marginLeft: 10,
      },
      header: {
        backgroundColor: "#e42313",
        alignItems: "center",
        justifyContent: "center",
        height: normalize(53),
      },
    });
    const { NamaLengkap, Email, NomorHP } = this.state;
    return (
      <Container>
        <Header style={styles.header}>
          <Text style={styles.TabText}>Profile</Text>
        </Header>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.Modal}
        >
          <View>
            <TouchableOpacity
              style={{
                marginTop: Math.round(Dimensions.get("window").width) / 1.5,
                alignItems: "center",
                alignContent: "center",
                backgroundColor: "white",
                width: Math.round(Dimensions.get("window").width),
                borderWidth: 1,
                borderColor: "#E4E4E4",
                padding: 20,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  marginTop: 0,
                  textAlign: "center",
                }}
              >
                Apakah Anda Yakin Logout?
              </Text>
              <View style={{ flexDirection: "row", height: 100 }}>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 2 }}>
                  <Button
                    style={styles.buttonlogin2}
                    onPress={() => this.setState({ Modal: false })}
                  >
                    <Text style={{}}>Batal</Text>
                  </Button>
                </View>
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 2 }}>
                  <Button
                    style={styles.buttonlogin}
                    onPress={() => this.__doLogout()}
                  >
                    <Text style={{}}>Keluar</Text>
                  </Button>
                </View>
                <View style={{ flex: 1 }}></View>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>

        <Content>
          <View style={styles.flex}>
            <Left>
              <View style={styles.flex}>
                <Image style={styles.fotoprofil} source={Foto} />
                <View style={styles.Marginname}>
                  <Text style={styles.TitleName}>{NamaLengkap}</Text>
                  <Text style={styles.IsiName}>{NomorHP}</Text>
                  <Text style={styles.IsiName}>{Email}</Text>
                </View>
              </View>
            </Left>
            <Right>
              <TouchableOpacity onPress={() => this.setState({ Modal: true })}>
                <Image source={Logout} on />
              </TouchableOpacity>
            </Right>
          </View>
          <Separator style={styles.backgroundcolor}>
            <Text style={styles.baseText}>
              <Text style={styles.titleText}>Sunting Akun</Text>
            </Text>
          </Separator>
          <List>
            <ListItem onPress={() => navigation.navigate("EditProfil")}>
              <Left>
                <Text style={styles.isiText}>Profil</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.isiText}>Alamat</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.isiText}>Ubah Kata Sandi</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>

          <Text>{"\n"}</Text>

          <Separator style={styles.backgroundcolor}>
            <Text style={styles.baseText}>
              <Text style={styles.titleText}>Umum</Text>
            </Text>
          </Separator>
          <List>
            <ListItem>
              <Left>
                <Text style={styles.isiText}>Tentang Rumah Jasa</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.isiText}>Syarat dan Ketentuan</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.isiText}>Kebijakan Privasi</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.isiText}>Nilai Rumah Jasa Apps</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Profil;
