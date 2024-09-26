import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Keyboard,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { initializeApp } from '@firebase/app';




const Profile = () => {
    const navigation = useNavigation();

    const Login = () => {
        navigation.navigate("Router");
    };

    const Signup = () => {
        navigation.navigate("Signup");
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [visibility, setVisibility] = useState(true);

   

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setVisibility(false);
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setVisibility(true);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {visibility && (
                    <View style={{ flex: 1 }}>
                         <Image
                style={{
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    height: '108%',
                    width: '100%',
                    position: 'absolute',
                }}
                source={require('../assets/greybg.png')}
                blurRadius={30} />
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button3}>
                                <Image source={require('../assets/back.png')} style={{ height: 20, width: 20, marginVertical: 25 }} />
                            </TouchableOpacity>
                            <View style={styles.logoContainer}>
                                {/* <Image source={require('../assets/nike_logo.png')} style={styles.logoImage} /> */}
                                <Text style={styles.loginText}>Login </Text>
                                <Text style={styles.loginDescription}>Enter your email and password</Text>
                            </View>
                       
                    </View>
                )}
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                            style={styles.inputField}
                            value={email}
                            autoCapitalize="none"
                            placeholderTextColor='black'
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.inputField}
                            autoCapitalize="none"
                            value={password}
                            placeholderTextColor='black'
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity>
                            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>

                    {loading ? <ActivityIndicator size="large" color="#000" />
                        : <>
                            <TouchableOpacity style={styles.loginButton} onPress={Login} >
                                <Text style={styles.loginButtonText}>Login </Text>
                            </TouchableOpacity>
                            <View style={styles.signupContainer}>
                                <Text style={styles.signupText}>Don't have an account?</Text>
                                <TouchableOpacity onPress={Signup}>
                                    <Text style={[styles.signupText, { color: 'green' }]}> Sign up</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    }
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    button3: {
        height: 40,
        width: 50,
        borderColor: 'white',
        elevation: 15,
        borderWidth: 1,
        backgroundColor: 'white',
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 68,
        marginBottom: 25,
        marginHorizontal: 25
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImage: {
        height: 30,
        width: 60,
        alignSelf: 'center',
        marginBottom: 20
    },
    loginText: {
        color: 'black',
        fontSize: 27,
        marginBottom: 8,
        fontWeight: "600"
    },
    loginDescription: {
        color: 'grey',
        fontSize: 13,
        marginBottom: 20
    },
    formContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 80,
    },
    inputContainer: {
        marginBottom: 50
    },
    inputLabel: {
        color: 'black',
        fontSize: 15,
    },
    inputField: {
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#01326f',
        marginTop: 5,
        color: 'black'
    },
    forgotPasswordText: {
        color: 'black',
        fontSize: 12,
        marginTop: 5,
        opacity: 0.5
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: 'black',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    signupContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupText: {
        color: 'black',
        fontWeight: '400',
        fontSize: 15
    }
});

export default Profile;
