import React from 'react';
import {StyleSheet } from "react-native";
import { Container, Separator, Content, Image, List, ListItem, View, Text, Left, Right, Icon} from 'native-base';

const Profil = () => {
    return (
        <Container>
          <Content>
              <Separator
              style={styles.backgroundcolor}>
                  <Text style={styles.baseText}>
                      <Text style={styles.titleText}>Sunting Akun</Text>
                  </Text>
              </Separator>
            <List>
              <ListItem>
                <Left>
                  <Text
                  style={styles.isiText}>Profil</Text>
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

          <Text>
              {"\n"}
          </Text>

            <Separator
            style={styles.backgroundcolor}>
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

  const styles = StyleSheet.create({

    baseText: {
      fontFamily: "Roboto"
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
    isiText: {
        fontFamily: "Roboto",
        fontSize: 14,
        fontStyle: "normal",
    },
    backgroundcolor: {
        backgroundColor: "#e4e4e4"
    },
  });

export default Profil;