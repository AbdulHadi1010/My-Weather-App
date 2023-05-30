import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Weathercall from './Weathercall';
import Details from './Details';
import {createStackNavigator} from '@react-navigation/stack';
import MySplashscreen from './MySplashScreen';
import FivedayForecast from './FivedayForecast';
import { Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            backgroundColor: '#121212',
            position: 'absolute',
            bottom: 5,
            left: 5,
            right: 5,
            borderRadius: 15,
            height: 65,
          },
          null,
        ],
      })}>
      <Tab.Screen
        name="Home"
        component={Weathercall}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, tintColor }) => (
            <TouchableOpacity style={{alignItems: 'center'}}>
            <Image
                source={require('../assets/icons/home.png')}
                resizeMode='contain'
                style={{
                    width: focused ? 30 : 20,
                    height: 40,
                    tintColor: focused ? '#fff' : '#748c96',

                }}
            />
            <Text style={{color: focused ? '#fff' : '#748c96',  fontSize: focused ? 15 : 10,}}>HOME</Text>
            </TouchableOpacity>
        )
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, tintColor }) => (
            <TouchableOpacity style={{alignItems: 'center'}}>
            <Image
                source={require('../assets/icons/menu.png')}
                resizeMode='contain'
                style={{
                    width:  focused ? 30 : 20,
                    height: 40,
                    tintColor: focused ? '#fff' : '#748c96',

                }}
            />
            <Text style={{color: focused ? '#fff' : '#748c96',  fontSize: focused ? 15 : 10,}}>DETAILS</Text>
            </TouchableOpacity>
        )
        }}
      />
      <Tab.Screen
        name="Five Day"
        component={FivedayForecast}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, tintColor }) => (
            <TouchableOpacity style={{alignItems: 'center'}}>
            <Image
                source={require('../assets/icons/clouds.png')}
                resizeMode='contain'
                style={{
                    width:  focused ? 30 : 20,
                    height: 40,
                    tintColor: focused ? '#fff' : '#748c96',
                }}
            />
            <Text style={{color: focused ? '#fff' : '#748c96',  fontSize: focused ? 15 : 10,}}>FIVE DAY</Text>
            </TouchableOpacity>
        )
        }}
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
