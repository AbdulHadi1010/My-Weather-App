import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Locationfetch} from './redux/action';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import RNBootSplash from 'react-native-bootsplash';

const image = require('../assets/weathericon.png');
const img = require('../assets/icons/logoLength.jpg');
export default function MySplashscreen({navigation}) {
  const dispatch = useDispatch();
  const UpdateLocation = () => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then(async data => {
        await dispatch(
          Locationfetch({
            setNavigator: () => {
              navigation.navigate('Tab');
            },
          }),
        );
      })
      .catch(err => {});
  };

  useEffect(() => {
    const init = async () => {
      UpdateLocation();
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: false, duration: 500});
      // console.log("BootSplash has been hidden successfully");
      // navigation.navigate('Home')
    });
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={image}
        resizeMode="center"
        style={styles.image}/>
        <Text style={styles.txt}>Powered By</Text>
      <Image source={img} resizeMode="center" style={styles.image1} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 300,
    height: '100%',
    paddingBottom: "120%",
  },
  image1: {
    flex: 1,
    width: 200,
    height: '100%',
  },
  txt: {
    alignSelf: 'center',
    top: 20,
    color: 'green',
    fontSize: 20,
  },
});
