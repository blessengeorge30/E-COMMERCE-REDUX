import React, { useState, useEffect } from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Button
} from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from "@react-navigation/native";


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('  ')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  const navigation = useNavigation();

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    
    // const arrayOfObjects = JSON.parse(data);
    // setText(arrayOfObjects);
    // console.log(text);

    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
    

  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
      <View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button3}>
                    <Image source={require('../assets/back.png')} style={{ height: 20, width: 20, marginVertical: 35 }} />
                </TouchableOpacity>
      </View>
     <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
      <Text style={{fontSize:18,fontWeight:'500',marginBottom:50}}>Scan the QR-Code of the Product</Text>
     <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 600, width: 600 }} />
      </View>
     </View>
     
      
        <Text style={styles.maintext}>{text}</Text>

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='green' />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  maintext: {
    fontSize: 25,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'green'
  },
  button3: {
    height: 35,
    width: 45,
    borderColor: '#eee',
    elevation: 15,
    borderWidth: 1,
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 78,
    marginHorizontal: 32

},
});