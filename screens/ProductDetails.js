import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { addToFavorites } from '../Redux/action/favoriteaction';
import { removeFromFavorites } from '../Redux/action/favoriteaction';
import { addToCart , removeFromCart } from '../Redux/action/favoriteaction';




const productDetailsScreen = ({ addToFavorites, removeFromFavorites, addToCart, removeFromCart, route }) => {

        const handleAddToFavorites = (itemToAdd) => {
            setPressed(!isPressed);
          // You can replace this with the actual item you want to add to favorites
        //   const itemToAdd = { id: 1, name: 'Example Item' };
          addToFavorites(itemToAdd);
          console.log('hi');
        };
        const handleAddToCart = (item) => {
         
          // You can replace this with the actual item you want to add to favorites
        //   const itemToAdd = { id: 1, name: 'Example Item' };
          addToCart(item);
          console.log('hi');
        };
      

  
    const { item } = route.params;


    const [isPressed, setPressed] = useState(false);

    const handlePress = () => {
        
        
    };


    const [Value, setValue] = useState(1);

    const add = () => {
        setValue(Value + 1);
    }

    const sub = () => {
        if (Value > 0) {
            setValue(Value - 1);
        }
    }
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Image
                style={{
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    height: '48%',
                    width: '100%',
                    position: 'absolute',
                }}
                source={require('../assets/greybg.png')}
                blurRadius={30} />
            <View style={{ flexDirection: 'row', marginTop: 45 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button3}>
                    <Image source={require('../assets/back.png')} style={{ height: 20, width: 20, marginVertical: 35 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}>
                    <Image source={require('../assets/shareicon.png')} style={{ height: 20, width: 20, marginVertical: 35 }} />
                </TouchableOpacity>
            </View>{console.log(item)}
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: -5 }}>
                <Image style={{ height: 200, width: 230, resizeMode: 'contain' }} source={JSON.parse(item.image)} />
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Image style={{ height: 4, width: 8, borderRadius: 0, marginTop: 15, marginHorizontal: 5, tintColor: '#00c559' }} source={require('../assets/slider1.png')} />
                    <Image style={{ height: 4, width: 3, borderRadius: 0, marginTop: 15 }} source={require('../assets/slider2.png')} />
                    <Image style={{ height: 4, width: 3, borderRadius: 0, marginTop: 15, marginHorizontal: 5 }} source={require('../assets/slider2.png')} />
                </View>



                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ borderRadius: 12, backgroundColor: '#eeeee4', flexDirection: 'row', elevation: 4 }}>
                        <TouchableOpacity style={styles.button} onPress={sub}>
                            <Image source={require('../assets/minus.png')} style={{ height: 15, width: 15 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 28, color: 'black', marginVertical: 6 }}>{Value}</Text>
                        <TouchableOpacity style={styles.button2} onPress={add}>
                            <Image source={require('../assets/plus.png')} style={{ height: 15, width: 15 }} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <View style={{ borderBottomWidth: 0.6, width: '82%', marginLeft: 35 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 25, fontWeight: '500', color: 'black', marginTop: 25 }}>
                                {item.name}
                            </Text>
                            <Text style={{ fontSize: 13, fontWeight: '400', color: 'black', marginTop: 0, marginBottom: 25 }}>
                                Company Verified & Assured Product 
                            </Text>
                        </View>

                        <TouchableOpacity onPress={() => handleAddToFavorites(item)} style={styles.button5}>
                            <Image
                                source={isPressed ? require('../assets/heart.png') : require('../assets/fav.png')}
                                style={{ width: 20, height: 20, }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.6, width: '82%', marginLeft: 35 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 15 }}>
                                Product Details
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: '350', color: 'black', marginTop: 5, marginBottom: 15 }}>
                                {item.productdetails}
                            </Text>

                        </View>
                        <Image source={require('../assets/downarrow.png')} style={{ height: 10, width: 15, borderRadius: 2, marginTop: 25, marginBottom: 15 }} />
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.6, width: '82%', marginLeft: 35 }}>
                    <View style={{ flexDirection: 'row', }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 15, marginBottom: 15, marginLeft: 5 }}>
                                Nutritions Details
                            </Text>

                        </View>
                        <Image source={require('../assets/100g.png')} style={{ height: 20, width: 40, borderRadius: 2, marginTop: 20, marginBottom: 15, marginLeft: 105 }} />
                        <TouchableOpacity>
                            <Image source={require('../assets/rightarrow1.png')} style={{ height: 15, width: 10, borderRadius: 2, marginTop: 22, marginBottom: 15, marginLeft: 18 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 35 }}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 15, marginLeft: 5 }}>
                            Reviews
                        </Text>

                    </View>
                    <Image source={require('../assets/stars.png')} style={{ height: 15, width: 95, borderRadius: 2, marginTop: 22, marginBottom: 15, marginLeft: 132 }} />
                    <TouchableOpacity>
                        <Image source={require('../assets/rightarrow1.png')} style={{ height: 15, width: 10, borderRadius: 2, marginTop: 22, marginLeft: 18 }} />
                    </TouchableOpacity>
                </View>


                {/* add to cart button */}
                <View style={{ marginHorizontal: 18, flexDirection: 'row', }}>
                    <Text style={{ fontSize: 28, color: 'black', marginHorizontal: 15, marginTop: 20, fontWeight: 600, flex: 2 }}>
                        ${item.price * Value}
                    </Text>
                    <View >
                        <TouchableOpacity  onPress={() => handleAddToCart(item)} style={{ backgroundColor: 'black', borderRadius: 10, marginHorizontal: 15, marginTop: 10, height: 50, width: 200, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }} >Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <Image source={require('../assets/HomeIndicator.png')} style={{ height: 5, width: 205 ,borderRadius:15,marginTop: 15, alignSelf: 'center' }} /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 45,
        width: 55,
        borderColor: 'white',
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
    button1: {
        height: 35,
        width: 45,
        borderColor: 'white',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 32,
        marginHorizontal: 240,
    },

    button2: {
        height: 45,
        width: 55,
        borderColor: 'white',
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
    button3: {
        height: 38,
        width: 45,
        borderColor: 'white',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 28,
        marginHorizontal: 20

    },
    button4: {
        height: 45,
        width: 55,
        borderColor: 'white',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        marginHorizontal: -25,
    },
    button5: {
        height: 38,
        width: 45,
        borderColor: 'white',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 28,
       marginHorizontal:-10

    },
});
const mapDispatchToProps = (dispatch) => ({
    addToFavorites: (item) => dispatch(addToFavorites(item)),
    addToCart: (item) => dispatch(addToCart(item)),
  });
  
  export default connect(null, mapDispatchToProps)(productDetailsScreen);
  