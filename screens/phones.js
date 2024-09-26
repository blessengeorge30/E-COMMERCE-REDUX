import React from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { PRODUCT_PHONES } from "../Components/DiscoverPhones";






const Homescreen = () => {

    const navigation = useNavigation();
    const offers = (item) => {
        console.log(item)
        navigation.navigate("ProductDetails", { item })
    }

    const Fooditems = () => {
        navigation.navigate("Location")
    }


    const renderitem1 = (item) => {

        return (
            <TouchableOpacity style={styles.discovercards} onPress={() => offers(item)} >

                <View style={{ marginTop: 15, alignSelf: "center", }}>
                    <Image style={{ height: 100, width: 50, marginHorizontal: 5, marginVertical: 5 }} source={item.image} />
                </View>
                <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 17, fontWeight: 'bold', color: 'black' }}>{item.name}</Text>

                <Text style={{ fontSize: 12, fontWeight: '400', color: 'grey', marginTop: 0, marginLeft: 15 }}>{item.pricetag}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginTop: 20, marginLeft: 15 }}>${item.price}</Text>
                    <TouchableOpacity>
                        <Image style={{ height: 40, width: 40, marginLeft: 40, marginTop: 15 }} source={item.image1} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }



    return (
        <ScrollView style={styles.container}>


            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <ImageBackground source={require('../assets/greybg.png')}
                        style={styles.backgroundImage}>


                        <View style={{ marginTop: 90, flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button3}>
                                <Image source={require('../assets/back.png')} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 22, marginBottom: 12, alignSelf: "center", marginLeft: 25, marginVertical: 5, fontWeight: "bold" }}> Mobile Phones </Text>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button4}>
                                <Image source={require('../assets/filter.png')} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>

                        </View>




                        <View style={{ marginVertical: 25, marginHorizontal: 8 }}>
                            <FlatList

                                data={PRODUCT_PHONES}

                                renderItem={({ item }) => renderitem1(item)}
                                numColumns={2} // Display 2 items per row
                            />
                        </View>

                    </ImageBackground>
                </View>
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 2000,
        backgroundColor: 'white',
        flex: 1

    },
    backgroundImage: {
        height: '100%',
        // width: '100%',


    },
    button3: {
        height: 35,
        width: 45,
        borderColor: 'white',
        elevation: 25,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',

        marginBottom: 2,
        marginHorizontal: 25

    },
    button4: {
        height: 35,
        width: 45,
        borderColor: 'white',
        elevation: 25,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 2,
        marginHorizontal: 45

    },
    logo: {

        width: 150,
        height: 80,
        marginTop: 60,
        marginBottom: 55,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: 'black'

    },
    logo1: {
        height: 200,
        width: 200,
        marginBottom: 10,
        resizeMode: "contain",
        alignSelf: "center"
    },
    logo2: {

        width: 15,
        height: 15,
        resizeMode: "contain",
        alignSelf: "center",
        tintColor: "green"

    },
    inputView: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        paddingHorizontal: 25,
        marginRight: 15,
        height: 40,
        width: 350,

        color: 'black',
        marginTop: 10,
        marginLeft: 25

    },

    inputView1: {
        width: '75%',
        height: 60,
        borderBottomWidth: 0.5,
        borderColor: '#01326f',
        marginTop: 10,
        marginHorizontal: 15,
        alignSelf: "center"



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
        backgroundColor: '#00c559',
        marginTop: 25,
        borderRadius: 5,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: "center",
        textAlignVertical: 'center',




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
        fontSize: 18,
        alignSelf: 'center'


    },
    buttontext1: {
        color: 'green',
        fontWeight: '500',
        height: 25,
        marginLeft: 72,
        fontSize: 16,

        alignSelf: "center",



    },
    buttontext2: {
        color: 'black',
        fontWeight: '400',
        fontSize: 15,
        alignItems: 'center',
        alignSelf: "center",



    },

    txtView: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',



    },
    discoverFooditems: {
        borderWidth: 0,
        borderColor: 'white',
        width: 173,
        height: 255,
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: 'white'
    },
    discovergros: {
        borderWidth: 0.8,
        borderColor: 'white',
        width: 203,
        height: 85,
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: '#E2FFEC'
    },
    discovercards: {
        borderWidth: 0,
        borderColor: 'white',
        width: 164,
        height: 255,
        borderRadius: 20,
        marginTop: 5,

        marginLeft: 18,
        marginVertical: 12,
        // alignItems: "center",
        // justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)'
    },





})
export default Homescreen;

