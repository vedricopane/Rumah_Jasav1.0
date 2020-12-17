import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  TouchableOpacity,
  Modal,
} from "react-native";
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item,
  Input,
  Label,
  Title,
  Spinner,
  Content,
  Icon,
} from "native-base";
import LogoMerah from "../assets/icons/Rumah_Jasa_Merah.png";
import firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Restart } from "fiction-expo-restart";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      icon: "eye-off",
      Password: "",
      PasswordUlang: "",
      NamaLengkap: "",
      Email: "",
      Alamat: "",
      Kota: "",
      Provinsi: "",
      KodePos: "",
      NomorHP: "",
      loading: false,
    };
  }

  __doCreateUser = async () => {
    const email = this.state.Email;
    const password = this.state.Password;
    const NamaLengkap = this.state.NamaLengkap;
    const Alamat = this.state.Alamat;
    const Kota = this.state.Kota;
    const Provinsi = this.state.Provinsi;
    const KodePos = this.state.KodePos;
    const NomorHP = this.state.NomorHP;
    const { navigation } = this.props;
    this.setState({ loading: true });
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (user) {
        console.log("uid", user.user.uid);
        firebase
          .database()
          .ref("users/" + user.user.uid)
          .set(
            {
              NamaLengkap: NamaLengkap,
              Alamat: Alamat,
              Kota: Kota,
              Provinsi: Provinsi,
              KodePos: KodePos,
              NomorHP: NomorHP,
              Email: email,
            },
            (error) => {
              if (error) {
                console.log(error.message);
                this.setState({ loading: false });

                Alert.alert("❌ Failed Write ❌", error.message);
              } else {
                const value = {
                  NamaLengkap: NamaLengkap,
                  Email: email,
                  NomorHP: NomorHP,
                  NewAccount: true,
                  Uid: user.user.uid,
                };
                try {
                  const jsonValue = JSON.stringify(value);
                  AsyncStorage.setItem("UserData", jsonValue);
                  Restart();
                } catch (e) {
                  console.log(e);
                  this.setState({ loading: false });
                  // Alert.alert("Failed Relog ✅", e);
                }
              }
            }
          );
      })
      .catch(function (error) {
        console.log(error.message);
        this.setState({ loading: false });

        Alert.alert("❌ Failed Register ❌", error.message);
      });
  };

  render() {
    const { label, icon, onChange } = this.props;
    return (
      <Container>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.loading}
        >
          <View>
            <TouchableOpacity
              style={{
                marginTop: Math.round(Dimensions.get("window").width) / 1.5,
                alignItems: "center",
                alignContent: "center",
                backgroundColor: "white",
                margin: 100,
                borderWidth: 1,
                borderColor: "#E4E4E4",
              }}
            >
              <Spinner color="red" />
              <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 0 }}>
                Loading
              </Text>
              <Text style={{ marginBottom: 20 }}>Harap Menunggu</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Content>
          <View style={styles.centerHorizontal}>
            <View style={styles.centerscreen}>
              <Image source={LogoMerah} style={styles.logo} />
            </View>
            <View style={styles.FormInputan}>
              <Form>
                <Item stackedLabel>
                  <Label>Nama Lengkap</Label>
                  <Input
                    style={styles.inputans}
                    onChangeText={(text) =>
                      this.setState({ NamaLengkap: text })
                    }
                  />
                </Item>
                <Item stackedLabel>
                  <Label>Email</Label>
                  <Input
                    style={styles.inputans}
                    onChangeText={(text) => this.setState({ Email: text })}
                  />
                </Item>
                <Item stackedLabel>
                  <Label>Kata Sandi</Label>
                  <Input
                    secureTextEntry={true}
                    style={styles.inputans}
                    onChangeText={(text) => this.setState({ Password: text })}
                  />
                </Item>
                <Item stackedLabel>
                  <Label>Ulangi Kata Sandi</Label>
                  <Input
                    secureTextEntry={true}
                    style={styles.inputans}
                    onChangeText={(text) =>
                      this.setState({ PasswordUlang: text })
                    }
                  />
                </Item>
                {this.state.Password != this.state.PasswordUlang && (
                  <Item
                    stackedLabel
                    style={{
                      borderColor: "transparent",
                      marginBottom: 0,
                      paddingBottom: 0,
                    }}
                  >
                    <Label
                      style={{
                        borderColor: "transparent",
                        marginBottom: 0,
                        color: "red",
                        paddingBottom: 0,
                      }}
                    >
                      Password Tidak Sama
                    </Label>
                  </Item>
                )}
                <Item stackedLabel>
                  <Label>Alamat</Label>
                  <Input
                    style={styles.inputans}
                    onChangeText={(text) => this.setState({ Alamat: text })}
                  />
                </Item>
                <Item stackedLabel>
                  <Label>Kota</Label>
                  <Input
                    style={styles.inputans}
                    onChangeText={(text) => this.setState({ Kota: text })}
                  />
                </Item>
                <Item stackedLabel>
                  <Label>Provinsi</Label>
                  <Input
                    style={styles.inputans}
                    onChangeText={(text) => this.setState({ Provinsi: text })}
                  />
                </Item>
                <Item stackedLabel>
                  <Label>Kode Pos</Label>
                  <Input
                    style={styles.inputans}
                    onChangeText={(text) => this.setState({ KodePos: text })}
                  />
                </Item>
                <Item stackedLabel>
                  <Label>Nomor Telpn</Label>
                  <Input
                    style={styles.inputans}
                    onChangeText={(text) => this.setState({ NomorHP: text })}
                  />
                </Item>
              </Form>
            </View>
            {this.state.Password === this.state.PasswordUlang && (
              <View style={styles.centerscreen2}>
                <Button
                  style={styles.buttonlogin}
                  onPress={() => this.__doCreateUser()}
                >
                  <Text style={{}}>Daftar</Text>
                </Button>
              </View>
            )}
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  centerscreen2: {
    marginLeft: 50,
    marginRight: 50,
    paddingLeft: 15,
    flexDirection: "row",
  },
  buttonlogin: {
    flex: 1,
    backgroundColor: "#E42313",
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  inputans: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: "#E4E4E4",
    paddingTop: 5,
    fontWeight: "200",
    paddingLeft: 20,
    paddingRight: 20,
  },
  FormInputan: {
    marginLeft: 50,
    marginRight: 50,
  },
  centerHorizontal: {
    marginTop: 20,
  },
  centerscreen: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#76a6ef'
  },
});

export default Login;
