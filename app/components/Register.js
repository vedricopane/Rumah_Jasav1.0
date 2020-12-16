import React from "react";
import { View, StyleSheet, Image, Dimensions, Alert } from "react-native";
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
  Content,
  Icon,
} from "native-base";
import LogoMerah from "../assets/icons/Rumah_Jasa_Merah.png";
import firebase from "firebase";

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
    };
  }

  __doCreateUser = async () => {
    let email = this.state.Email;
    let password = this.state.Password;
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        Alert.alert("Success ✅", "Account created successfully");
      })
      .catch((error) => {
        Alert.alert("Failed ✅", error.message);
      });
  };

  render() {
    const { label, icon, onChange } = this.props;
    return (
      <Container>
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
