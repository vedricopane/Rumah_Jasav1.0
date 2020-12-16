import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Image } from "react-native";
import { Container, Content, Card, CardItem, Text, Body, Right, 
  Left} from "native-base";
import normalize from "react-native-normalize";
import clock from '../assets/icons/clock.png'


const PemesananProses = () => {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
        <Content padder>
          <Card>
            <CardItem bordered>
              <Left>
                <View style={styles.arah}>
                  <Image source={clock}/>
                  <View style={styles.margin}>
                    <Text style={styles.status}>Dalam Pencarian
                    </Text>
                  </View>
                </View>
              </Left>
              <Right>
                <Text style={styles.tanggal} >Des 20, 2020</Text>
              </Right>
            </CardItem>
            <CardItem bordered>
              <Left>
                <Text style={styles.textJudul}>No. Pesanan</Text>
              </Left>
              <Left>
                <Text style={styles.textPesanan}>IW3475453455</Text>
              </Left>
            </CardItem>
            <CardItem bordered>
              <Left>
                <Text style={styles.textJudul}>Tipe Jasa</Text>
              </Left>
              <Left>
                <Text style={styles.textIsi}>Asisten Rumah Tangga</Text>
              </Left>
            </CardItem>
            <CardItem bordered>
              <Left>
                <Text style={styles.textJudul}>Durasi Jasa</Text>
              </Left>
              <Left>
                <Text style={styles.textIsi}>1 Bulan</Text>
              </Left>
            </CardItem>
            <CardItem bordered>
              <Left>
                <Text style={styles.textJudul}>Kemampuan</Text>
              </Left>
              <Left>
                <Text style={styles.textIsi}>Sangat berpengalaman dan di training dengan baik</Text>
              </Left>
            </CardItem>
            <CardItem bordered>
              <Left>
                <Text style={styles.textJudul}>Status</Text>
              </Left>
              <Left>
                <Text style={styles.textStatus}>ART dalam proses pencarian</Text>
              </Left>
            </CardItem>
            <CardItem bordered>
              <Text style={styles.textLain}>ART yang anda inginkan sedang dicari, 
                harap tunggu konfirmasi selanjutnya.
              </Text>
            </CardItem>
          </Card>
        </Content>
        </ScrollView>
      
      </SafeAreaView>
    </Container>
  )
};

const styles = StyleSheet.create({
  tanggal: {
    fontFamily: 'Roboto',
    fontWeight:'300',
    fontSize: normalize(13),
    color: '#999999',
  },
  status: {
    fontFamily: 'Roboto',
    fontWeight:'500',
    fontSize: normalize(11),
    color: '#ffcf5c',
  },
  margin: {
    marginLeft: normalize(5),
  },
  arah: {
    flexDirection:'row',
  },
  textIsi: {
    textAlign:'left',
    fontSize: normalize(12),
    fontWeight: '400',
    marginLeft: normalize(-20),
  },
  textPesanan: {
    textAlign:'left',
    fontSize: normalize(13),
    fontWeight: 'bold',
    marginLeft: normalize(-20),
    color: '#e42313',
  },
  textJudul: {
    textAlign:'left',
    fontSize: normalize(13),
    fontWeight: '500',
    marginRight: normalize(20),
  },
  textStatus: {
    textAlign:'left',
    fontSize: normalize(17),
    fontWeight: '500',
    color: '#e42313',
    marginLeft: normalize(-20),
  },
  textLain: {
    textAlign: 'center',
    fontSize: normalize(14),
    fontWeight: '500',
  }
});

export default PemesananProses;
