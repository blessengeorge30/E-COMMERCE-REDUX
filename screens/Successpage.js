import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Router from "./Router";





const Onboard = () => {
    const navigation = useNavigation();
    const Homescreen = () => {
        navigation.navigate("Signin")
    }
    const back = () => {
        navigation.navigate("Cart")
    }

    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={8} source={require('../assets/whitebg.png')}
                style={styles.backgroundImage}>
                    <View style={{marginTop:250,marginBottom:15,marginHorizontal:100}}>
                        <Image source={require('../assets/success.png')} style={{ height:160, width: 180}} />
                    </View>

                <View style={{ marginTop: 20, alignItems: 'center', alignSelf: 'center' }}>
                    <View >
                        <Text style={{ color: 'black', fontSize: 30,fontWeight: 'bold', alignSelf:"center",marginBottom: -5 }}>Your Order </Text>
                        <Text style={{ color: 'black', fontSize: 28, fontWeight: 'bold' ,marginLeft: -5, marginBottom: 15 }}>has Successfully placed </Text>
                       

                    </View>

                    <View >
                        <Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', fontWeight: "300" }}>Your items has been placed and is on 
                        it’s way</Text>
<Text style={{ color: 'black', fontSize: 15, alignSelf: 'center', fontWeight: "300" }}> to being processed</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonView} onPress={Homescreen}>
                        <Text style={styles.buttontext}> Track Order</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonView88} onPress={back}>
                        <Text style={styles.buttontext}> Back to Home</Text>
                    </TouchableOpacity>
                </View>






            </ImageBackground>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        height: 100,

        flex: 1
    },
    backgroundImage: {
        height: '100%',
        width: '100%',


    },
    logo: {
        height: 350,
        width: 350,
        marginBottom: 80,
        resizeMode: "contain",
        // marginLeft:45,

        alignSelf: "center"

    },
    logo1: {
        height: 15,
        width: 15,



    },
    inputView: {
        width: '70%',
        height: 65,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#012143',
        backgroundColor: '#011122',
        marginTop: 25,
        paddingLeft: 25,
        marginLeft: 10


    },
    inputView1: {
        width: '15%',
        height: 65,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: '#012143',
        backgroundColor: '#011122',
        marginTop: 25,
        paddingLeft: 10,
        marginLeft: 25


    },
    logo2: {
        height: 20,
        width: 20,




    },
    cardtext: {
        marginTop: 12,
        marginLeft: 24,
        color: 'white',
        fontSize: 18,
        marginRight: 110
    },

    buttonView: {
        width: '88%',
        height: 65,
        backgroundColor: 'black',
        marginTop: 55,
        borderRadius: 10,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: "center",
        textAlignVertical: 'center',
        zIndex: 2,




    },
    buttonView88: {
        width: '88%',
        height: 65,
        backgroundColor: 'black',
        marginTop: 15,
        borderRadius: 10,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: "center",
        textAlignVertical: 'center',
        zIndex: 2,




    },
    buttonView1: {
        width: '80%',
        height: 35,
        backgroundColor: '#ebecf0',
        marginTop: 22,
        borderRadius: 8,
        alignSelf: "center",
        alignItems: 'center',
        textAlignVertical: 'center',
        paddingHorizontal: 40,
        flexDirection: "row",


    },


    buttontext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center'


    },

    buttontext1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 20


    },


})
export default Onboard;