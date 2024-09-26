import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";
// import { PRODUCT_PROFILEITEMS } from "../Components/profileitemlist";



const Profile = () => {

    const navigation = useNavigation();
    const Login = () => {
        navigation.navigate("Shop")
    }
    const QR = () => {
        navigation.navigate("Qrcode")
    }
    const renderItem = (item) => {
        return (

            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View>
                    <View style={{ flexDirection: 'row', }}>
                        <Image style={{ height: 30, width: 30, marginLeft: 30, marginVertical: 15, }} source={item.image} />

                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, marginLeft: 15, marginTop: 15 }}>{item.name}</Text>
                    </View>
                    <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 15, position: 'absolute', marginTop: 34, marginLeft: 75 }}>{item.name1}</Text>

                    <View style={{ borderBottomWidth: 0.5, borderBottomColor: 'white', marginHorizontal: 10 }}></View>
                </View>
            </View>
        );

    };
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../assets/background1.jpg')}
                style={styles.backgroundImage}>
                <View style={{ marginTop: 50, marginBottom: 80 }}>
                    <View style={{ flex: 1 }}>

                    </View>
                    <View style={{ marginTop: 54 }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginLeft: 40, marginRight: 75 }}>ACCOUNT ID</Text>
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', marginLeft: 40, }}>Scan the QR code to connect your Account</Text>
                        </View>
                        <TouchableOpacity >
                            <Image source={require('../assets/bell.png')} style={{ height: 25, width: 25, marginRight: -14, tintColor: 'black' }} />

                        </TouchableOpacity>


                    </View>
                </View>
            </ImageBackground>
            <View style={{ height: 1000, backgroundColor: '#e6e9eb', borderRadius: 15, }}>
                <View style={styles.headercard}>

                    <View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginLeft: 30, marginTop: 19 }}>Connect your Account ID  </Text>
                    </View>
                    <View style={styles.headercard2}>
                        <Image source={require('../assets/QR.png')} style={{ height: 220, width: 220, marginVertical: 15, alignSelf: "center", borderRadius: 15 }} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 25, alignSelf: "center" }}>ACCOUNT ID : 956233</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 5, alignSelf: "center" }}> USER: BLESSEN GEORGE </Text>

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={QR} style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 25, marginLeft: 48 }}>
                                <Text> Scan QR Code      </Text></TouchableOpacity>
                            <Text style={{ marginTop: 25 }}>  |      </Text>
                            <TouchableOpacity style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 25, alignSelf: "center" }}>
                                <Text>  Share QR Code </Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 15 }}>
                    <TouchableOpacity style={styles.headercard1} onPress={QR}>
                        <Text style={{ fontSize: 15, alignSelf: "center", justifyContent: "center", alignItems: "center", marginTop: 10, color: "white" }}>QR CODE SCANNER </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.headercard1} onPress={Login}>
                        <Text style={{ fontSize: 15, alignSelf: "center", justifyContent: "center", alignItems: "center", marginTop: 10, color: "white" }}>HOME </Text>

                    </TouchableOpacity>
                </View>
                {/*                
               <View style={styles.button3}>
               <TouchableOpacity style={styles.button4}>
                
                            <Image source={require('../assets/creditcard.png')} style={{ height: 25, width: 25, tintColor: 'white' }} />

                        </TouchableOpacity>
                    <Text style={{ color:'white',fontSize:20,marginVertical:25}}>Custom payment </Text>
                    </View> */}


            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: 'black',
        flex: 1
    },
    logo: {
        height: 100,
        width: 100,
        marginLeft: 25,
        marginRight: 25

    },
    backgroundImage: {
        height: 245
    },
    headercard: {
        borderWidth: 0,
        width: '89%',
        height: 480,
        backgroundColor: 'white',
        marginTop: -55,
        marginHorizontal: 22,
        borderRadius: 20,
        elevation: 15


    },

    headercard1: {
        borderWidth: 0,
        width: '79%',
        height: 40,
        backgroundColor: 'black',
        marginTop: 5,
        alignSelf: "center",
        borderRadius: 5,
        elevation: 15,



    },
    headercard2: {
        borderWidth: 0,
        width: '72%',
        height: 250,
        backgroundColor: '#eeeee4',
        marginTop: 15,

        borderRadius: 20,
        elevation: 15,
        alignSelf: 'center',


    },
    cardtext: {
        marginVertical: 25,
        marginHorizontal: 35,
        color: '#000305',
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardtext1: {
        marginVertical: 15,
        marginHorizontal: 20,
        color: '#000305',
        fontSize: 15,
        //    fontWeight:'bold'
    },
    cardtext2: {
        marginVertical: 15,
        marginHorizontal: 50,
        color: '#000305',
        fontSize: 16,
        fontWeight: 'bold'
    },
    cardtext3: {
        marginVertical: 10,
        marginHorizontal: 75,
        color: '#000305',
        fontSize: 16,
        fontWeight: 'bold'
    },
    button1: {
        height: 35,
        width: 35,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'black',
        paddingVertical: 8,
        flexDirection: "row",
        borderRadius: 5,
        justifyContent: 'center',


    },

    button2: {
        height: 80,
        width: '85%',
        borderColor: 'green',
        borderWidth: 2,
        backgroundColor: 'green',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 30,
        marginVertical: 15
    },
    button3: {
        flexDirection: 'row',
        height: 80,
        width: '85%',
        borderColor: '#01c459',
        borderWidth: 2,
        backgroundColor: '#01c459',
        borderRadius: 10,
        marginLeft: 30,
        marginVertical: 15,

    },
    button4: {
        height: 45,
        width: 45,
        borderColor: '#017635',
        borderWidth: 1,
        backgroundColor: '#01c459',
        paddingVertical: 8,
        flexDirection: "row",
        borderRadius: 5,
        marginvertical: 20,
        marginTop: 16,
        marginHorizontal: 25,
        justifyContent: 'center',


    },
    bank: {
        height: 65,
        width: 65,
        marginTop: 30,
        marginLeft: 40,

    },
    bank1: {
        height: 45,
        width: 45,
        marginTop: 38,
        marginLeft: 60,

    },
    bank2: {
        height: 50,
        width: 50,
        marginTop: 38,
        marginLeft: 58,

    },


})
export default Profile;