import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Weathercall from './Weathercall';
import Details from './Details';
import {createStackNavigator} from '@react-navigation/stack';
import MySplashscreen from './MySplashScreen';
import FivedayForecast from './FivedayForecast';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen
        name="Home"
        component={Weathercall}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      /> */}
      <Tab.Screen
        name="Five Day"
        component={FivedayForecast}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen
        name="splash"
        component={MySplashscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tab"
        component={Tabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
