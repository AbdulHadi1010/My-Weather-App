import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Weathercall from './Weathercall';
import MySplashScreen from './Splashscreen';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Weathercall}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen name="splash" component={MySplashScreen} />
      <Stack.Screen name="Home" component={Tabs} />
    </Stack.Navigator>
  );
}
