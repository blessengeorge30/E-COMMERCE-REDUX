import React from "react";
import { Text, View, Image } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Cart from "../Bottomnavigation/Cart";
import Favourites from "../Bottomnavigation/Favourites";
import Shop from "../Bottomnavigation/Shop";
import Account from "../Bottomnavigation/Account";
import Explore from "../Bottomnavigation/Explore";





const Tab = createBottomTabNavigator();

const ShopIcon = () => (
    <Image
      source={require("../assets/shop.png")}
      style={{ width: 25, height: 25, tintColor: "white" }}
    />
  );
  const ExploreIcon = () => (
    <Image
      source={require("../assets/explore.png")}
      style={{ width: 24, height: 17, tintColor: "white" }}
    />
  );
  const CartIcon = () => (
    <Image
      source={require("../assets/cart1.png")}
      style={{ width: 20, height: 18, tintColor: "white" }}
    />
  );
  const FavIcon = () => (
    <Image
      source={require("../assets/fav.png")}
      style={{ width: 22, height: 22, tintColor: "white" }}
    />
  );
  const AccountIcon = () => (
    <Image
      source={require("../assets/acc.png")}
      style={{ width: 22, height: 20, tintColor: "white" }}
    />
  );

const Router = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 80,
                    backgroundColor: 'black',
                    borderTopLeftRadius:10,
                    borderTopRightRadius:10
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "grey",
 
               
      
                tabBarItemStyle: {
                    marginTop: 15,
                    marginBottom: 5
                },
            }} >

             <Tab.Screen
                name="Shop"
                component={Shop}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <ShopIcon />
                      ),
                    tabBarLabelStyle: {
                      
                        marginTop: -1,

                    },
                }} />
          
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <ExploreIcon/>
                        ),
                    tabBarLabelStyle: {
                      
                        marginTop: 1,
                    },
                }} />
              <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <CartIcon/>
                        ),
                    tabBarLabelStyle: {
                     
                        marginTop: 1,

                    },
                }}
            />  
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FavIcon/>
                        ),
                    tabBarLabelStyle: {
                       
                        marginTop: 1,

                    },
                }} />
            
              <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AccountIcon/>
                        ),
                    tabBarLabelStyle: {
                       
                        marginTop: 1,

                    },
                }} />
        </Tab.Navigator>

    )
}
export default Router;