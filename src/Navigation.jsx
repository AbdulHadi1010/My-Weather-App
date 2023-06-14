import React, {useEffect, useState} from 'react';
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
// import {
//   InterstitialAd,
//   AdEventType,
//   TestIds,
//   BannerAd,
//   BannerAdSize,
// } from 'react-native-google-mobile-ads';

// const adUnitId = 'ca-app-pub-9315049673582381/4958846198';

// const BannerAdUnitID = 'ca-app-pub-9315049673582381/2715826235';

// const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
//   requestNonPersonalizedAdsOnly: true,
//   keywords: ['fashion', 'clothing'],
// });

const Tab = createBottomTabNavigator();

function Tabs(props) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              borderTopWidth: 0,
              position: 'absolute',
              height: 70,
              bottom: 10,
              borderRadius: 200,
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
                  colors={['rgba(46,51,90,0.50)', 'rgba(51,48,102,0.20)']}
                  style={{
                    borderWidth: 1,
                    borderColor: 'grey',
                    height: 80,
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
              <TouchableOpacity
                style={{
                  top: 5,
                  paddingLeft: 10,
                  paddingRight: 10,
                  backgroundColor: focused ? '#fff' : null,
                  alignItems: 'center',
                  borderWidth: focused ? 5 : 0,
                  borderColor: focused ? '#fff' : null,
                  borderRadius: focused ? 100 : 0,
                }}>
                <Image
                  source={require('../assets/icons/home.png')}
                  resizeMode="contain"
                  style={{
                    width: focused ? 25 : 20,
                    height: 40,
                    tintColor: focused ? '#000' : '#fff',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#000' : '#fff',
                    fontSize: focused ? 12 : 10,
                    fontWeight: focused ? '600' : '400',
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
              <TouchableOpacity
                style={{
                  top: 5,
                  paddingLeft: 10,
                  paddingRight: 10,
                  backgroundColor: focused ? '#fff' : null,
                  alignItems: 'center',
                  borderWidth: focused ? 5 : 0,
                  borderColor: focused ? '#fff' : null,
                  borderRadius: focused ? 100 : 0,
                }}>
                <Image
                  source={require('../assets/icons/menu.png')}
                  resizeMode="contain"
                  style={{
                    width: focused ? 25 : 20,
                    height: 40,
                    tintColor: focused ? '#000' : '#fff',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#000' : '#fff',
                    fontSize: focused ? 12 : 10,
                    fontWeight: focused ? '600' : '400',
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
            tabBarIcon: ({focused}) => (
              <TouchableOpacity
                style={{
                  top: 5,
                  paddingLeft: 10,
                  paddingRight: 10,
                  backgroundColor: focused ? '#fff' : null,
                  alignItems: 'center',
                  borderWidth: focused ? 5 : 0,
                  borderColor: focused ? '#fff' : null,
                  borderRadius: focused ? 100 : 0,
                }}
                // onPress={() => {
                //   props.func();
                // }}
              >
                <Image
                  source={require('../assets/icons/clouds.png')}
                  resizeMode="contain"
                  style={{
                    width: focused ? 25 : 20,
                    height: 40,
                    tintColor: focused ? '#000' : '#fff',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#000' : '#fff',
                    fontSize: focused ? 12 : 10,
                    fontWeight: focused ? '600' : '400',
                  }}>
                  FIVE DAY
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Tab.Navigator>
      {/* <BannerAd
      // unitId={BannerAdUnitID}
      // size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      // requestOptions={{
      //   requestNonPersonalizedAdsOnly: true,
      // }}
      /> */}
    </View>
  );
}
const Stack = createStackNavigator();
export default function Navigation() {
  // const [interstitialLoaded, setInterstitialLoaded] = useState(false);
  // const loadInterstitial = () => {
  //   const unsubscribeLoaded = interstitial.addAdEventListener(
  //     AdEventType.LOADED,
  //     () => {
  //       setInterstitialLoaded(true);
  //     },
  //   );

  //   const unsubscribeClosed = interstitial.addAdEventListener(
  //     AdEventType.CLOSED,
  //     () => {
  //       setInterstitialLoaded(false);
  //       interstitial.load();
  //     },
  //   );

  //   interstitial.load();

  //   return () => {
  //     unsubscribeClosed();
  //     unsubscribeLoaded();
  //   };
  // };
  // useEffect(() => {
  //   const unsubscribeInterstitialEvents = loadInterstitial();

  //   return () => {
  //     unsubscribeInterstitialEvents();
  //   };
  // }, []);
  // const interstitialAdsShow = () => {
  //   if (interstitialLoaded) {
  //     interstitial.show();
  //   }
  // };
  return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen
        name="splash"
        component={MySplashscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tab"
        // component={Tabs}
        options={{headerShown: false}}>
        {() => (
          <Tabs
          // func={interstitialAdsShow}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  absolute: {
    borderRadius: 20,
    // borderWidth: 5,
    // borderColor: 'white',
    overlayColor: 'transparent',
  },
});
