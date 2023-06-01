import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Weathercall from './Weathercall';
import Details from './Details';
import {createStackNavigator} from '@react-navigation/stack';
import MySplashscreen from './MySplashScreen';
import FivedayForecast from './FivedayForecast';
import {Image, View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            position: 'absolute',
            // bottom: 5,
            // left: 5,
            // right: 5,
            // borderRadius: 15,
            height: 65,
          },
          null,
        ],
        tabBarBackground: () => (
          <View>
            <BlurView
              style={styles.absolute}
              blurType="dark"
              blurAmount={10}
              reducedTransparencyFallbackColor="black">
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={["rgba(46,51,90,0.50)", "rgba(51,48,102,0.20)"]}
                style={{
                  height: 70,
                  borderRadius: 20,
                }}
              />
            </BlurView>
          </View>
        ),
      })}>
      <Tab.Screen
        name="Home"
        component={Weathercall}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, tintColor}) => (
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: focused ? 30 : 20,
                  height: 40,
                  tintColor: focused ? '#fff' : '#000',
                }}
              />
              <Text
                style={{
                  color: focused ? '#fff' : '#000',
                  fontSize: focused ? 15 : 10,
                }}>
                HOME
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, tintColor}) => (
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/menu.png')}
                resizeMode="contain"
                style={{
                  width: focused ? 30 : 20,
                  height: 40,
                  tintColor: focused ? '#fff' : '#000',
                }}
              />
              <Text
                style={{
                  color: focused ? '#fff' : '#000',
                  fontSize: focused ? 15 : 10,
                }}>
                DETAILS
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Five Day"
        component={FivedayForecast}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, tintColor}) => (
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/clouds.png')}
                resizeMode="contain"
                style={{
                  width: focused ? 30 : 20,
                  height: 40,
                  tintColor: focused ? '#fff' : '#000',
                }}
              />
              <Text
                style={{
                  color: focused ? '#fff' : '#000',
                  fontSize: focused ? 15 : 10,
                }}>
                FIVE DAY
              </Text>
            </TouchableOpacity>
          ),
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

const styles = StyleSheet.create({
  picture: {
    flex: 1,
  },
  conatiner: {
    flex: 1,
    justifyContent: 'center',
  },
  con: {
    width: '75%',
    alignSelf: 'center',
    marginTop: 100,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 20,
  },
  bottomView: {
    // position: "absolute",
    bottom: 0,
    top: '7%',
    justifyContent: 'center',
    width: '100%',
  },
  text1: {
    paddingTop: 10,
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 40,
  },
  text: {
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 90,
    paddingLeft: 20,
    lineHeight: 100,
    fontWeight: 600,
  },
  text2: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 5,
    fontWeight: 600,
  },
  text_grey: {
    color: '#EBEBF599',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 25,
  },
  absolute: {
    overlayColor: 'transparent',
  },
});
