import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Pressable
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PRODUCT_OFFERS } from "../Components/Discoveroffers";
import { PRODUCT_ITEMS } from "../Components/Discoveritems";
import { firestore } from "firebase/firestore";
import { PRODUCT_CATAGORIES } from "../Components/DiscoverCategories";



const Profile = () => {

    // const getData = async () => {
    //     const userCollection = await firestore().collection('products').get()
    //     console.log(userCollection.docs[0].data)
    // }

    // useEffect(() => {
    //     getData();
    // }, [])

    const navigation = useNavigation();


    const offers = (item) => {
        console.log(item)
        navigation.navigate("ProductDetails", { item })
    }
    const Signup = () => {
        navigation.navigate("Qrcode")
    }
    const cart = () => {
        navigation.navigate("Cart")
    }
    const explore = () => {
        navigation.navigate("Explore")
    }


    // const getData = async () => {
    //     try {
    //       const querySnapshot = await getDocs(collection(fireDB, "products"));
    //       const products = querySnapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         ...doc.data(),
    //       }));

    //       console.log("Data:", products);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };


    //     useEffect(() => {
    //       getData();
    //     }, []);



    const renderitem = (item) => {

        return (

            <View style={styles.discoveroffers}>
                <View>
                    <TouchableOpacity onPress={() => offers(item)}>
                        <Image style={{ height: 100, width: 110, marginLeft: 30, marginTop: 25 }} source={item.image} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginTop: 15, marginLeft: 15 }}>{item.name}</Text>
                        <Text style={{ fontSize: 18, fontWeight: '400', color: 'grey', marginTop: 0, marginLeft: 15 }}>{item.pricetag}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginTop: 25, marginLeft: 15 }}>${item.price}</Text>
                        {item.qty === 0 ? (
                            <TouchableOpacity onPress={() => addItemToCart(item)}>
                                <Image style={{ height: 45, width: 45, marginLeft: 50, marginTop: 15 }} source={item.image1} />
                            </TouchableOpacity>
                        ) : null}
                        {item.qty === 0 ? null : (
                            <TouchableOpacity style={{
                                backgroundColor: 'green',
                                borderRadius: 5,
                                height: 25,
                                justifyContent: 'center',
                            }}>
                                <Text style={{ color: 'white', marginBottom: 5, marginTop: 5, marginHorizontal: 5 }}>-</Text>
                            </TouchableOpacity>
                        )}
                        {item.qty === 0 ? null : (
                            <View style={{ flexDirection: 'row', marginTop: 25 }}>
                                <Text style={{ marginLeft: 1, marginTop: 5 }}>{'0'}</Text>
                                <TouchableOpacity style={{
                                    backgroundColor: 'green',
                                    borderRadius: 5,
                                    height: 25,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={{ color: 'white', marginBottom: 5, marginTop: 5, marginHorizontal: 5 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        );
    };
    const renderitems = (item) => {

        return (

            <View style={styles.discoveroffers}>
                <View >
                    <TouchableOpacity onPress={() => offers(item)}>
                        <Image style={{ height: 85, width: 110, marginLeft: 30, marginTop: 25 }} source={item.image} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginTop: 15, marginLeft: 15 }}>{item.name}</Text>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'grey', marginTop: 0, marginLeft: 15 }}>{item.pricetag}</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginTop: 25, marginLeft: 15 }}>${item.price}</Text>
                        <TouchableOpacity>
                            <Image style={{ height: 45, width: 45, marginLeft: 50, marginTop: 15 }} source={item.image1} />
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        )
    }

    const renderitem3 = (item) => {

        return (
            <TouchableOpacity>
                <View style={styles.discovercats}>

                    <View style={{ flexDirection: 'row' }}>

                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>{item.name}</Text>


                    </View>

                </View>
            </TouchableOpacity>
        )
    }




    return (
        <ScrollView style={styles.container}>


            <View style={{ justifyContent: "center" }}>
                <View >
                    <ImageBackground blurRadius={15} source={require('../assets/greybg.png')}
                        style={styles.backgroundImage}>
                        <View style={{ marginLeft: 0 }}>
                            <View style={{ marginTop: 85, flexDirection: 'row', justifyContent: "space-between", marginBottom: 35 }}>
                                <TouchableOpacity onPress={Signup} style={styles.button4}>
                                    <Image source={require('../assets/qrcode.png')} style={{ height: 20, width: 20 }} />
                                </TouchableOpacity>
                                <Image source={require('../assets/nike_logo.png')} style={{ height: 28, width: 65, alignSelf: 'center', tintColor: 'black' }} />
                                <TouchableOpacity onPress={cart} style={styles.button3}>
                                    <Image source={require('../assets/cart.png')} style={{ height: 25, width: 25 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 70, marginTop: -25 }}>
                                <Image source={require('../assets/Exclude.png')} style={{ height: 16, width: 14, alignSelf: 'center', marginLeft: 30, marginTop: -15 }} />
                                <Text style={{ color: 'black', fontSize: 22, marginBottom: 12, alignSelf: "center", marginLeft: 10, fontWeight: "500" }}>Thrissur, Kerala.</Text>
                            </View>

                            <View>
                                <TextInput style={styles.inputView}

                                    placeholder='Search store'

                                    placeholderTextColor='grey'
                                    maxLength={12}></TextInput>
                            </View>
                            <View style={{ marginTop: 25, marginLeft: 18 }}>
                                <ScrollView horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    {
                                        PRODUCT_CATAGORIES?.map((item) => {
                                            return renderitem3(item);
                                        })
                                    }
                                </ScrollView>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: 'black', fontSize: 22, marginBottom: 12, marginVertical: 15, marginHorizontal: 30, marginRight: 45, fontWeight: "bold" }}>Exclusive Offers</Text>
                                <TouchableOpacity style={{ flexDirection: "row" }} onPress={explore} >
                                    <Text style={styles.buttontext1}>  see all</Text>
                                    <Image source={require('../assets/rightarrow.png')} style={{ height: 10, width: 10, marginHorizontal: 10, marginTop: 22, borderRadius: 15 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: 5, marginHorizontal: 8 }} >
                                <ScrollView horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    {
                                        PRODUCT_OFFERS?.map((item) => {
                                            return renderitem(item);
                                        })
                                    }
                                </ScrollView>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: 'black', fontSize: 22, marginBottom: 12, marginVertical: 15, marginHorizontal: 30, marginRight: 25, fontWeight: "500" }}>Limited time Offers</Text>
                                <TouchableOpacity style={{ flexDirection: "row" }} >
                                    <Text style={styles.buttontext1}>  see all</Text>
                                    <Image source={require('../assets/rightarrow.png')} style={{ height: 10, width: 10, marginHorizontal: 10, marginTop: 22, borderRadius: 15 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: 5, marginHorizontal: 8, marginBottom: 116 }}>
                                <ScrollView horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    {
                                        PRODUCT_ITEMS?.map((item) => {
                                            return renderitems(item);
                                        })
                                    }
                                </ScrollView>
                            </View>


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


    },
    button3: {
        height: 35,
        width: 50,
        borderColor: 'white',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2,
        marginRight: 25,


    },
    button4: {
        height: 35,
        width: 50,
        borderColor: 'white',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2,
        marginLeft: 18,


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
        height: 40,
        width: '90%',
        alignSelf: 'center',
        color: 'black',
        marginTop: 10,


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
        color: 'black',
        fontWeight: '500',
        height: 25,
        marginLeft: 60,
        marginTop: 5,
        fontSize: 16,
        alignItems: 'flex-end',
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
    discoveroffers: {
        borderWidth: 0,
        borderColor: 'white',
        width: 175,
        height: 280,
        borderRadius: 10,
        marginHorizontal: 10,
        alignContent: "center",

        backgroundColor: 'rgba(255,255,255,0.7)'
    },
    discovergros: {
        borderWidth: 0.8,
        borderColor: 'white',
        width: 203,
        height: 85,
        borderRadius: 10,
        marginHorizontal: 5,
        marginBottom: 25,
        backgroundColor: '#E2FFEC'
    },
    discovercats: {
        borderWidth: 0.8,
        borderColor: 'white',
        width: 103,
        height: 45,
        borderRadius: 10,
        marginHorizontal: 5,
        marginBottom: 25,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
})
export default Profile;
