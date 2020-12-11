import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
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
import Logout from "../assets/icons/Logout.png";
import Foto from "../assets/icons/tuyul.jpg";

const Profil = ({ navigation }) => {
  return (
    <Container>
      <Button full backgroundColor="#e42313">
        <Text style={styles.TabText}>Profile</Text>
      </Button>
      <Content>
        <View style={styles.flex}>
          <Left>
            <View style={styles.flex}>
              <Image style={styles.fotoprofil} source={Foto} />
              <View style={styles.Marginname}>
                <Text style={styles.TitleName}>Tiana Rosser</Text>
                <Text style={styles.IsiName}>+123456789123</Text>
                <Text style={styles.IsiName}>tianacantik@gmail.com</Text>
              </View>
            </View>
          </Left>
          <Right>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
          <ListItem>
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
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#e42313",
  },
  isiText: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
  },
  backgroundcolor: {
    backgroundColor: "#fff",
  },
  TitleName: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
  },
  IsiName: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "300",
  },
  Marginname: {
    marginLeft: 10,
  },
  TabText: {
    color: "#fff",
    fontFamily: "Roboto",
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
});

export default Profil;
