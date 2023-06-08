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
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
  BannerAd,
  BannerAdSize,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.REWARDED
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});
const Tab = createBottomTabNavigator();

function Tabs() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        setLoaded(true);
      },
    );
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
      },
      // setLoaded(true),
    );

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }

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
                }}
                onPress={() => {
                  rewarded.show();
                }}>
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
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
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
  absolute: {
    borderRadius: 20,
    // borderWidth: 5,
    // borderColor: 'white',
    overlayColor: 'transparent',
  },
});
