import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Modal,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Spinner,
  Item,
  Input,
  Label,
  Title,
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
      Password: "",
      Email: "",
      loading: false,
    };
  }
  __doLogin = async () => {
    const email = this.state.Email;
    const password = this.state.Password;
    if (email == "" || password == "") {
      if (email == "") {
        Alert.alert("❌ Failed Login ❌", "Masukan Email ");
      } else {
        Alert.alert("❌ Failed Login ❌", "Masukan password ");
      }
    } else {
      this.setState({ loading: true });
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (user) {
          console.log("uid", user.user.uid);
          let NamaLengkap = "";
          let Email = "";
          let NomorHP = "";
          let NewAccount = false;
          let Uid = user.user.uid;
          firebase
            .database()
            .ref("/users/" + user.user.uid)
            .once("value")
            .then((snapshot) => {
              NamaLengkap = snapshot.val().NamaLengkap;
              Email = snapshot.val().Email;
              NomorHP = snapshot.val().NomorHP;
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
                // Alert.alert("Failed Relog ✅", e);
              }
            });
        })
        .catch(
          function (error) {
            Alert.alert("❌ Failed Login ❌", error.message);
            this.setState({ loading: false });
          }.bind(this)
        );
    }
  };

  render() {
    const { navigation } = this.props;
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
                  <Label>Email</Label>
                  <Input
                    style={styles.inputans}
                    onChangeText={(text) => this.setState({ Email: text })}
                  />
                </Item>
                <Item stackedLabel>
                  <Label>Kata Sandi</Label>
                  <Input
                    style={styles.inputans}
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ Password: text })}
                  />
                </Item>
              </Form>
            </View>
            <View style={styles.centerscreen2}>
              <Button
                style={styles.buttonlogin}
                onPress={() => this.__doLogin()}
              >
                <Text style={{}}>Masuk</Text>
              </Button>
            </View>
            <View style={styles.centerscreen2}>
              <View style={{ flex: 1, marginTop: 20 }}>
                <Text style={{}}>Lupa Kata Sandi</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <View style={{ flex: 1, textAlign: "right", marginTop: 20 }}>
                  <Text style={{ textAlign: "right" }}>Daftar Sekarang</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.centerscreen2}>
              <View style={{ flex: 1, marginTop: 20, textAlign: "center" }}>
                <Text style={{ textAlign: "center", fontWeight: "300" }}>
                  Atau
                </Text>
              </View>
            </View>
            <View style={styles.centerscreen2}>
              <Button
                iconLeft
                style={
                  ([styles.buttonlogin],
                  { backgroundColor: "#0084F4", width: "100%", marginTop: 10 })
                }
              >
                <Icon name="logo-facebook" />

                <Text
                  style={{ borderRightColor: "white", borderRightWidth: 1 }}
                >
                  Masuk Dengan Facebook
                </Text>
              </Button>
            </View>
            <View style={styles.centerscreen2}>
              <Button
                iconLeft
                style={
                  ([styles.buttonlogin],
                  { backgroundColor: "#4EAEFF", width: "100%", marginTop: 10 })
                }
              >
                <Icon name="logo-google" />
                <Text
                  style={{ borderRightColor: "white", borderRightWidth: 1 }}
                >
                  Masuk Dengan Google
                </Text>
              </Button>
            </View>
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
