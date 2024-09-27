import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {firebase } from "./config/firebase"

import Router from './screens/Router';
import Splash from './screens/Splash';
import SignIn from './screens/Signin';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ProductDetails from './screens/ProductDetails';
import phones from './screens/phones';
import Qrcode from './screens/Qrcode';
import AccountID from './screens/AccountID';
import Successpage from './screens/Successpage';
import CartAdded from './screens/CartAdded';
import store from './Redux/store';
import { Provider } from 'react-redux';





const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        /> 
       
          <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{ headerShown: false }}
        /> 
       
       
           <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        /> 
           <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        /> 
           <Stack.Screen
          name="Router"
          component={Router}
          options={{ headerShown: false }}
        /> 
           
      
            <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        /> 
           <Stack.Screen
          name="phones"
          component={phones}
          options={{ headerShown: false }}
        /> 
       
         <Stack.Screen
          name="Qrcode"
          component={Qrcode}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="AccountID"
          component={AccountID}
          options={{ headerShown: false }}
        /> 
         <Stack.Screen
          name="Successpage"
          component={Successpage}
          options={{ headerShown: false }}
        /> 
          <Stack.Screen
          name="CartAdded"
          component={CartAdded}
          options={{ headerShown: false }}
        /> 
            
        
      </Stack.Navigator>
   
    </NavigationContainer>
    </Provider>
  );
};

export default App;
