import React, { useRef, useState } from 'react';
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
    Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, Button,
    Pressable,
    Switch,
    useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";


const cartScreen = () => {
    const cart = useSelector(state => state.cart.cart);
    console.log('cart:', cart);

    const [darkmode, setDarkmode] = useState(false);
    const [Delivery, setDelivery] = useState(false);
    const [device, setDevice] = useState(false);
    const { width } = useWindowDimensions();
    const [theme, setTheme] = useState("dim");
    const [isOpen, setIsOpen] = useState(false);

    const bottomSheetModalRef = useRef(null);

    const snapPoints = ["25%", "48%", "75%"];

    const handlePresentModal = () => {
        bottomSheetModalRef.current?.present();
        setTimeout(() => {
          setIsOpen(true);
          setStatusBarStyle('dark-content'); 
        }, 100);
      };
      

    const navigation = useNavigation();
    const HOME = () => {
        navigation.navigate("Shop")
    }
    const SUCCESS = () => {
        navigation.navigate("Successpage")
    }

    const [statusBarStyle, setStatusBarStyle] = useState('light-content'); 


    const [Value, setValue] = useState(1);

    const add = () => {
        setValue(Value + 1);
    }

    const sub = () => {
        if (Value > 0) {
            setValue(Value - 1);
        }
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>

                <SafeAreaView style={styles.container22}>
                    <View
                        style={[
                            styles.container,
                            { backgroundColor: isOpen ? "gray" : "white" },
                        ]}
                    >

                        <View style={styles.header}>
                            <Text style={styles.headerText}> MY CART....</Text>
                        </View>
                        <View style={styles.scrollContainer}>
                            <ScrollView vertical={true} contentContainerStyle={styles.scrollContent}>
                                {cart?.map(item => (
                                    <TouchableOpacity style={{ width: '100%' }}>
                                        <View key={item.id} style={styles.itemContainer}>
                                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                                <Image style={{ height: 80, width: 110, marginLeft: 20, marginTop: 35 }} source={item.image} />

                                                <View>
                                                    <Text style={styles.itemName}>{item.name}</Text>
                                                    <Text style={styles.itemPricetag}>{item.pricetag}</Text>
                                                    <View style={{ marginTop: 15, marginLeft: 25 }}>
                                                        <View style={{ borderRadius: 12, backgroundColor: '#eeeee4', flexDirection: 'row', width: '52%', elevation: 24 }}>
                                                            <TouchableOpacity style={styles.button} onPress={sub}>
                                                                <Image source={require('../assets/minus.png')} style={{ height: 15, width: 15 }} />
                                                            </TouchableOpacity>
                                                            <Text style={{ fontSize: 22, color: 'black', marginVertical: 6 }}>{Value}</Text>
                                                            <TouchableOpacity style={styles.button2} onPress={add}>
                                                                <Image source={require('../assets/plus.png')} style={{ height: 15, width: 15 }} />
                                                            </TouchableOpacity>
                                                            <Text style={styles.itemPrice}>${item.price * Value}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}

                                <View>
                                    <TouchableOpacity style={styles.buttonView21} onPress={handlePresentModal}>
                                        <Text style={styles.buttontext}> CHECKOUT </Text>
                                    </TouchableOpacity>
                                </View>

                                <StatusBar style="auto" />
                                <BottomSheetModal
                                    ref={bottomSheetModalRef}
                                    index={1}
                                    snapPoints={snapPoints}
                                    backgroundStyle={{ borderRadius: 30 }}
                                    onDismiss={() => setIsOpen(false)}
                                >
                                    <View style={styles.contentContainer}>
                                        <Text style={[styles.title, { marginBottom: 20, marginTop: 10 }]}>
                                            Checkout Instantly
                                        </Text>
                                        <View style={styles.row}>
                                            <Text style={styles.subtitle}>UPI Transaction</Text>
                                            <Switch
                                                value={darkmode}
                                                onChange={() => setDarkmode(!darkmode)}
                                            />
                                        </View>
                                        <View style={styles.row}>
                                            <Text style={styles.subtitle}>Delivery</Text>
                                            <Text style={styles.subtitle1}>Select Method</Text>
                                            <TouchableOpacity onPress={HOME} style={styles.button3}>
                                                <Image source={require('../assets/backarrow.png')} style={{ height: 15, width: 10 }} />

                                            </TouchableOpacity>

                                        </View>
                                        <Text style={styles.description}>
                                            Select your Delivery Option for Delivery Charges to be added in the total amount
                                        </Text>
                                        <View style={styles.row}>
                                            <Text style={styles.subtitle}>Payment Gateway Prefered</Text>
                                            <Image source={require('../assets/debitcard.png')} style={{ height: 22, width: 25, marginRight: -75 }} />
                                            <TouchableOpacity onPress={HOME} style={styles.button4}>
                                                <Image source={require('../assets/backarrow.png')} style={{ height: 15, width: 10 }} />

                                            </TouchableOpacity>
                                        </View>
                                        <Text style={styles.description}>
                                            Select your Prefered Payment Option.Specify the types of credit or debit cards accepted, or mention the payment networks associated with the chosen option (e.g., Visa, MasterCard, American Express).
                                        </Text>
                                        <View
                                            style={{
                                                width: width,
                                                borderBottomWidth: StyleSheet.hairlineWidth,
                                                borderBottomColor: "gray",
                                                marginVertical: 35,
                                            }}
                                        />


                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={[styles.title, { width: "100%" }]}>TOTAL COST </Text>
                                            <Text style={[styles.title1, { width: "100%" }]}>$82.99</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{ flexDirection: 'row', marginLeft: 4, marginTop: 15 }}>
                                                <Text style={styles.buttontext2}> By continuing you agree to our </Text>
                                                <Text style={styles.buttontext1}>Terms of Service </Text>

                                            </View>
                                            <View>

                                                <View style={{ flexDirection: 'row', marginLeft: 4 }}>
                                                    <Text style={styles.buttontext2}> and </Text>
                                                    <Text style={styles.buttontext1}>Privacy Policy. </Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                        <View>
                                            <TouchableOpacity style={styles.buttonView21} onPress={SUCCESS}>
                                                <Text style={styles.buttontext}> Place Order </Text>
                                            </TouchableOpacity>
                                        </View>


                             
                                    </View>
                                </BottomSheetModal>
                            </ScrollView>
                        </View>
                    </View>
                </SafeAreaView>

            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container22: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        borderBottomWidth: 0.5,
        opacity: 0.5,
    },
    headerText: {
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: '500',
        color: 'black',
        marginVertical: 15,
    },
    scrollContainer: {
        flex: 1,
    },
    scrollContent: {
        marginTop: 15

    },
    itemContainer: {
        borderWidth: 0.5,
        borderRadius: 12,
        width: '97%',
        height: 180,
        marginVertical: 10,
        marginLeft: 6,
        backgroundColor: 'white'
    },
    image: {
        height: 80,
        width: 110,
        resizeMode: 'cover',
    },
    itemName: {
        fontSize: 22,
        marginTop: 25,
        marginLeft: 35
    },
    itemPricetag: {
        fontSize: 15,
        fontWeight: '400',
        color: 'grey',
        marginTop: 0,
        marginLeft: 32

    },
    itemPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 5,
        marginLeft: 15,
        marginRight: 10
    },

    headercard1: {
        borderWidth: 0,
        width: '39%',
        height: 30,
        backgroundColor: 'black',
        marginTop: 5,
        marginLeft: 14,

        borderRadius: 5,
        elevation: 15,



    },
    button: {
        height: 35,
        width: 40,
        borderColor: 'grey',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        // paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 1,
        marginRight: 20,
    },
    button2: {
        height: 35,
        width: 40,
        borderColor: 'grey',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        // paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 1,
        marginLeft: 20,

    },
    container: {
        flex: 1,
        backgroundColor: "gray",
        // alignItems: "center",
        // justifyContent: "center",
    },
    contentContainer: {
        flex: 1,
        // alignItems: "center",
        paddingHorizontal: 20,
    },
    row: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    title: {
        fontWeight: "700",
        // letterSpacing: 0.5,
        fontSize: 20,
        marginLeft: -1
    },
    title1: {
        fontWeight: "700",
        // letterSpacing: 0.5,
        fontSize: 20,
        marginLeft: -75
    },
    subtitle: {
        color: "#101318",
        fontSize: 14,
        fontWeight: "bold",
        marginVertical: 8
    },
    subtitle1: {
        color: "#101318",
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 155
    },
    description: {
        color: "#56636F",
        fontSize: 13,
        fontWeight: "normal",
        width: "100%",
    },
    button4: {
        marginLeft: -15

    },
    buttontext1: {
        color: 'green',
        fontWeight: 'bold',
        height: 25,
        marginLeft: 2,
        fontSize: 14,
        alignItems: 'center',
        alignSelf: "center",
    },
    buttontext2: {
        color: 'black',
        fontWeight: '400',
        fontSize: 14,
    },
    buttonView21: {
        width: '88%',
        height: 55,
        backgroundColor: 'black',
        marginTop: 15,
        borderRadius: 5,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: "center",
        textAlignVertical: 'center',
        zIndex: 2,




    },
    buttontext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,



    },
});

export default cartScreen;
