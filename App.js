import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home, Booking, OrderDelivery } from "./screens";
import Tabs from "./navigation/tabs"

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName = {"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;