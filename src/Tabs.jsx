import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Weathercall from "./Weathercall";


const Tab = createBottomTabNavigator();

export default function Tabs() {


  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Weathercall} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}
