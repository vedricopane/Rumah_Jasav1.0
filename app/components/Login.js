import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
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
  Content,
  Icon,
} from "native-base";
import LogoMerah from "../assets/icons/Rumah_Jasa_Merah.png";

const Login = ({ navigation }) => {
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
                <Label>Email</Label>
                <Input style={styles.inputans} />
              </Item>
              <Item stackedLabel>
                <Label>Kata Sandi</Label>
                <Input style={styles.inputans} />
              </Item>
            </Form>
          </View>
          <View style={styles.centerscreen2}>
            <Button
              style={styles.buttonlogin}
              onPress={() => navigation.navigate("TabNavigator")}
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

              <Text style={{ borderRightColor: "white", borderRightWidth: 1 }}>
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
              <Text style={{ borderRightColor: "white", borderRightWidth: 1 }}>
                Masuk Dengan Google
              </Text>
            </Button>
          </View>
        </View>
      </Content>
    </Container>
  );
};

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
