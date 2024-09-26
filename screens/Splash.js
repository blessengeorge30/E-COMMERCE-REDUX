import React, { useEffect } from "react";
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate("Signin");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/nike_logo.png')} 
        style={styles.logo} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center', 
  },
  logo: {
    height: 65,
    width: 190,
    alignSelf: 'center',
    tintColor: 'white',
    marginVertical: 380, 
  }
});

export default Splash;
