import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Locationfetch} from './redux/action';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import RNBootSplash from 'react-native-bootsplash';

const image = require('../assets/images.png');
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
      <ImageBackground
        source={image}
        resizeMode='center'
        style={styles.image}></ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
