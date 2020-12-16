import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View, Image, TouchableOpacity} from "react-native";
import { Container, Content, Text, Body, Right, Button,
  Left, Header, Separator, CheckBox, ListItem, Radio} from "native-base";
import normalize from "react-native-normalize";

const ART = () => {
  return (
    <ScrollView> 
      <Container>
        <Header style={styles.header}>
          <Text style={styles.TabText}>Asisten Rumah Tangga</Text>
        </Header>
        <Content>
          <Separator style={styles.backgroundcolor}>
            <Text style={styles.baseText}>
              <Text style={styles.titleText}>Durasi Jasa</Text>
            </Text>
          </Separator>
            <ListItem selected={true}>
              <Left>  
                <Text style={styles.textRadio}>1 Hari</Text>
              </Left>
              <Right>
                <Radio
                  color={"#E42313"}
                  selectedColor={"#E42313"}
                  selected={false}
                />
              </Right>
            </ListItem>
            <ListItem selected={true} >
              <Left>  
                <Text style={styles.textRadio}>1 Minggu</Text>
              </Left>
              <Right>
                <Radio
                  color={"#E42313"}
                  selectedColor={"#E42313"}
                  selected={false}
                />
              </Right>
            </ListItem>
            <ListItem selected={true} >
              <Left>  
                <Text style={styles.textRadio}>1 Bulan</Text>
              </Left>
              <Right>
                <Radio
                  color={"#E42313"}
                  selectedColor={"#E42313"}
                  selected={false}
                />
              </Right>
            </ListItem>
            <ListItem selected={true} >
              <Left>  
                <Text style={styles.textRadio}>1 Tahun</Text>
              </Left>
              <Right>
                <Radio
                  color={"#E42313"}
                  selectedColor={"#E42313"}
                  selected={false}
                />
              </Right>
            </ListItem>
          <Separator style={styles.backgroundcolor}>
            <Text style={styles.baseText}>
              <Text style={styles.titleText}>Kemampuan</Text>
            </Text>
          </Separator>
            <ListItem selected={true} >
              <Left>  
                <Text style={styles.textRadio}>Sangat Berpengalaman dan ditraining dengan baik</Text>
              </Left>
              <Right>
                <Radio
                  color={"#E42313"}
                  selectedColor={"#E42313"}
                  selected={false}
                />
              </Right>
            </ListItem>
            <ListItem selected={true} >
              <Left>  
                <Text style={styles.textRadio}>Berpengalaman dan ditraining</Text>
              </Left>
              <Right>
                <Radio
                  color={"#E42313"}
                  selectedColor={"#E42313"}
                  selected={false}
                />
              </Right>
            </ListItem>
            <ListItem selected={true} >
              <Left>  
                <Text style={styles.textRadio}>Training</Text>
              </Left>
              <Right>
                <Radio
                  color={"#E42313"}
                  selectedColor={"#E42313"}
                  selected={false}
                />
              </Right>
            </ListItem>
          <Separator style={styles.backgroundcolor}>
            <Text style={styles.baseText}>
              <Text style={styles.titleText}>Pekerjaan</Text>
            </Text>
          </Separator>
            <ListItem>
              <Left>
                <Text style={styles.textCheckBox}>Mencuci Pakaian</Text>
              </Left>
              <Right>
                <CheckBox checked={false} 
                          color={"#E42313"} 
                          selectedColor={"#E42313"} style={{marginRight: 13}}/>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.textCheckBox}>Menyetrika Pakaian</Text>
              </Left>
              <Right>
                <CheckBox checked={false} 
                          color={"#E42313"} 
                          selectedColor={"#E42313"} style={{marginRight: 13}}/>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.textCheckBox}>Menyapu dan mengepel</Text>
              </Left>
              <Right>
                <CheckBox checked={false} 
                          color={"#E42313"} 
                          selectedColor={"#E42313"} style={{marginRight: 13}}/>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.textCheckBox}>Mencuci piring</Text>
              </Left>
              <Right>
                <CheckBox checked={false} 
                          color={"#E42313"} 
                          selectedColor={"#E42313"} style={{marginRight: 13}}/>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.textCheckBox}>Membersihkan kamar mandi</Text>
              </Left>
              <Right>
                <CheckBox checked={false} 
                          color={"#E42313"} 
                          selectedColor={"#E42313"} style={{marginRight: 13}}/>
              </Right>
            </ListItem>
          <Separator style={styles.backgroundcolorHargaJasa}>
              <View style={styles.wrapperHargaJasa}>
                <Text style={styles.textHargaJasa}>Harga Jasa</Text>
                <Text style={styles.textNominal}>Rp 1.075.000,-</Text>
              </View>
              <Body>

              </Body>
              {/* <View>
                <Button style={styles.buttonPesan}>
                  <Text style={styles.textbutton}>Pesan</Text>
                </Button>
              </View> */}
          </Separator>
        </Content>
      </Container>
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  header: {
    backgroundColor: "#e42313",
    alignItems: "center",
    justifyContent: "center",
    height: normalize(53),
  },
  TabText: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: "bold",
    fontStyle: "normal",
  },
  backgroundcolor: {
    backgroundColor: "#fff",
    marginTop: 5
  },
  backgroundcolorHargaJasa: {
    backgroundColor: "#fff",
    marginTop: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  baseText: {
    fontFamily: "Roboto",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  textRadio: {
    color: 'black',
    fontSize: 16,
    paddingLeft: 10
  },
  textCheckBox: {
    color: 'black',
    fontSize: 16,
    paddingLeft: 10
  },
  wrapperHargaJasa: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 6,
    marginLeft: normalize(-12)
  },
  textHargaJasa: {
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
  buttonPesan: {
    // marginTop: normalize (55),
    height: normalize(35),
    width: normalize(155),
    margin: normalize(5),
    marginLeft: normalize(65),
    textAlign: "center",
    justifyContent: "center",
    // alignItems: "center",
    borderRadius: normalize(10),
    backgroundColor: '#e42313',
  },
  textbutton: {
    fontSize: normalize(16),
    fontWeight: '400',
    color: '#fff'
  },
});

export default ART;
