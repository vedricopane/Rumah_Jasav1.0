import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import artIcon from '../assets/icons/artIcon.png';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.saldo}>
            </View>
            <Text style={styles.textPilihJasa}>Pilih Jasa</Text>
            <View style={styles.wrapperCardJasa}>
                <View style={styles.cardPilihJasa}>
                    <View style={styles.cardJasa}>
                        <Image
                            source={artIcon}
                            style={styles.iconJasa}/>
                        <Text style={styles.textJasa}>Asisten Rumah Tangga</Text>
                    </View>    
                </View>
                <View style={styles.cardPilihJasa}>
                    
                </View>
                <View style={styles.cardPilihJasa}>
                    
                </View>
            </View>

            <View style={styles.wrapperCardJasa}>
                <View style={styles.cardPilihJasa}>
                    
                </View>
                <View style={styles.cardPilihJasa}>
                    
                </View>
                <View style={styles.cardPilihJasa}>
                    
                </View>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#76a6ef'
    },
    textPilihJasa: {
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 7,
        color: 'black',
        marginTop: 50
    },
    saldo: {
        width: 250,
        height: 55,
        backgroundColor: 'white',
        position: 'relative',
        marginTop: 250,
        borderRadius: 69,
        elevation: 1
    },
    wrapperCardJasa: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    cardPilihJasa: {
        width : 106,
        height: 120,
        marginTop: 20,
        margin: 4,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#E4E4E4',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardJasa: {
        borderColor: '#E42313', 
        borderWidth: 1, 
        width: 66, 
        height: 66,
        flex: 1,
        borderRadius: 66/2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 20
    },
    iconJasa: {
        width:50, height: 50
    },
    textJasa: {
        fontSize: 13,
        fontWeight: '200',
        color: 'black',
        // marginTop: 50
    }
});

export default Home;
