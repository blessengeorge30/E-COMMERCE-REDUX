import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Signin = () => {
    const [visibility, setVisibility] = useState(true);
    const navigation = useNavigation();

    const handleConfirmButtonPress = () => {
        navigation.navigate('Login');
    };

    const navigateToLogin = () => {
        navigation.navigate('Login');
    };

    const navigateToRoute = () => {
        navigation.navigate("Router");
    };

    return (
        <View style={styles.container}>
            {visibility && (
                <View>
                    <ImageBackground
                        source={require('../assets/whitebg.png')}
                        style={styles.backgroundImage}
                    >
                        <Image
                            source={require('../assets/otp.jpg')}
                            style={styles.logo}
                        />
                    </ImageBackground>
                </View>
            )}

            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.mainText}>
                        Enjoy a seamless shopping experience 🚀
                    </Text>
                </View>

                <View style={styles.phoneInputContainer}>
                    <View style={styles.flagContainer}>
                        <Image
                            source={require('../assets/UK.png')}
                            style={styles.flag}
                        />
                    </View>
                    <Text style={styles.countryCode}>+44   </Text>
                    <TextInput
                        style={styles.phoneInput}
                        placeholder='Enter your phone no.'
                        placeholderTextColor='grey'
                        maxLength={12}
                        keyboardType='numeric'
                        onSubmitEditing={handleConfirmButtonPress}
                        onPress={() => setVisibility(!visibility)}
                    />
                    <TouchableOpacity style={styles.arrowButton} onPress={navigateToLogin}>
                        <Image
                            source={require('../assets/rightarrow1.png')}
                            style={styles.arrowIcon}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.socialText}>or connect with social media</Text>

                <TouchableOpacity style={styles.buttonGoogle} onPress={navigateToRoute}>
                    <Image
                        source={require('../assets/googleicon.png')}
                        style={styles.socialIcon}
                    />
                    <Text style={styles.buttonText}>Continue with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonFacebook} onPress={navigateToRoute}>
                    <Image
                        source={require('../assets/facebookicon.png')}
                        style={styles.socialIconFacebook}
                    />
                    <Text style={styles.buttonText}>Continue with Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundImage: {
        height: '80%',
    },
    logo: {
        height: 200,
        width: 200,
        borderRadius: 100,
        marginTop: 135,
        resizeMode: "contain",
        alignSelf: "center",
    },
    contentContainer: {
        height: 1000,
        backgroundColor: '#011a37',
        borderRadius: 15,
        marginTop: 10,
    },
    textContainer: {
        marginTop: -280,
        marginHorizontal: 20,
    },
    mainText: {
        color: 'black',
        fontSize: 28,
        fontWeight: '500',
        marginBottom: 15,
    },
    phoneInputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 0.8,
        borderBottomColor: '#A2A2A2',
        width: '90%',
        marginLeft: 20,
        marginVertical: 15,
    },
    flagContainer: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    flag: {
        height: 20,
        width: 40,
    },
    countryCode: {
        color: 'black',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: '350',
        marginVertical: 15,
    },
    phoneInput: {
        flex: 1,
        marginVertical: 15,
        color: 'black',
    },
    arrowButton: {
        height: 35,
        width: 50,
        borderColor: 'white',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: '#ebecf0',
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 45,
        marginTop: 15,
    },
    arrowIcon: {
        height: 15,
        width: 8,
    },
    socialText: {
        color: 'black',
        fontSize: 12,
        alignSelf: 'center',
        fontWeight: '350',
        marginVertical: 22,
    },
    buttonGoogle: {
        width: '88%',
        height: 65,
        backgroundColor: '#5383EC',
        marginTop: 15,
        borderRadius: 15,
        alignSelf: "center",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonFacebook: {
        width: '88%',
        height: 65,
        backgroundColor: '#4A66AC',
        marginTop: 15,
        borderRadius: 15,
        alignSelf: "center",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    socialIcon: {
        height: 20,
        width: 20,
        marginHorizontal: 25,
      
    },
    socialIconFacebook: {
        height: 22,
        width: 12,
        marginLeft: 25,
        marginRight: 28,
        
    },
    buttonText: {
        color: 'white',
        fontWeight: '350',
        fontSize: 15,
        marginLeft: 35,
    },
});

export default Signin;
