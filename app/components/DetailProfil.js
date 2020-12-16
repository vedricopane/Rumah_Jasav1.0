import React, {useState} from "react";
import { StyleSheet, View, Image, TouchableOpacity, Platform } from "react-native";
import {
  Container, Separator, Content, List, ListItem, Text,
  Left, Right, Icon, Header, Form, Item, Input, Label, Button} from "native-base";
import normalize from "react-native-normalize";
import DateTimePicker from '@react-native-community/datetimepicker';

import Foto from "../assets/icons/tuyul.jpg";
import Edit from "../assets/icons/Edit.png";
import verif from "../assets/icons/verif.png";

const DetailProfil = ({navigation}) => {
    return (
      <Container>
        <Header style={styles.header}>
          <Text style={styles.TabText}>Profile</Text>
        </Header>
        <Content>
          <View style={styles.flex}>
              <View style={styles.flex}>
                <Image style={styles.fotoprofil} source={Foto} />
              </View>
          </View>
          <Image style={styles.edit} source={Edit} />
          <Form>
            <Item stackedLabel>
              <Label style={styles.titleText}>Nama</Label>
              <Input textContentType="name"/>
            </Item>
            <Item stackedLabel>
              <Label style={styles.titleText}>Tanggal Lahir</Label>
              <Input textContentType="name" on/>
            </Item>
          </Form>
          <List>
            <ListItem>
            <Left>
                <View style={styles.flex1}>
                    <Text style={styles.titleText}>Jenis Kelamin</Text>
                    <Text style={styles.isiText}>Perempuan</Text>
                </View>
            </Left>
            </ListItem>
            <ListItem>
            <Left>
                <View style={styles.flex1}>
                    <View style={styles.flex2}>
                        <Text style={styles.titleText}>Email</Text>
                        <Image style={styles.verifikasi} source={verif} />
                    </View>
                    <Text style={styles.isiText}>tianacantik@gmail.com</Text>
                </View>
            </Left>
            </ListItem>
            <ListItem>
            <Left>
                <View style={styles.flex1}>
                    <View style={styles.flex2}>
                        <Text style={styles.titleText}>No. HP</Text>
                        <Image style={styles.verifikasi} source={verif} />
                    </View>
                    <Text style={styles.isiText}>+123456789123</Text>
                </View>
            </Left>
            </ListItem>
        </List>
        </Content>
        <Button onPress={() => navigation.navigate("Profil")} style={styles.button2}>
            <Text>Simpan</Text>
        </Button>
      </Container>
    );
  };

const styles = StyleSheet.create({
    button2:{
        position: 'absolute',
        height: normalize(35),
        width: normalize(350),
        bottom: normalize(0),
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: normalize(10),
        backgroundColor: '#e42313',
        alignSelf:'center',
        marginBottom: normalize(20),
      },
    verifikasi: {
        marginLeft: normalize(15),
        marginTop: normalize(0),
        marginBottom: normalize(-10),
    },
    baseText: {
      fontFamily: "Roboto",
    },
    titleText: {
      fontSize: 14,
      fontWeight: "500",
      color: "#000",
      alignSelf:'flex-start',
    },
    
    isiText: {
      marginTop: normalize(15),
      fontFamily: "Roboto",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: "300",
      color: "#000",
      alignSelf:'flex-start',
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
      marginTop: normalize(20),
      marginBottom: normalize(10),
      alignItems:'center',
      justifyContent:'center',
    },
    flex1: {
        flexDirection: "column",
    },
    flex2: {
        flexDirection: "row",
    },
    fotoprofil: {
      borderWidth: 2,
      width: normalize(70),
      height: normalize(70),
      borderRadius: normalize(300),
      marginLeft: normalize(10),

    },
    edit:{
        width: normalize(23),
        height: normalize(23),
        marginLeft: normalize(210),
        marginTop: normalize(-40),
        marginBottom: normalize(30),
    },
    header:{
      backgroundColor:'#e42313',
      alignItems:'center',
      justifyContent:'center',
      height: normalize(53),
    },
  });

  export default DetailProfil;