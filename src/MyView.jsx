import {View, StyleSheet} from 'react-native';
import React from 'react';
import {GlobalStyles} from './GlobalStyles';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';

export default function MyView({props}) {
  return (
    <LinearGradient
    colors={['rgba(46, 51, 90, 0.62)', 'rgba(17, 17, 17, 0.62)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    useAngle={true}
    angle={133.66}
      style={styles.container}>
      <BlurView
        style={styles.absolute}
        Type="light"
        Amount={20}
        reducedTransparencyFallbackColor="white">
        {props}
      </BlurView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  txt: {
    color: 'white',
  },
  container: {
    margin: 10,
    flex: 1,
    padding: 30,
    backgroundColor: '#2B225A',
    borderColor: '#716878',
    borderWidth: 1.5,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowColor: '#FFFFFF',
    shadowRadius: 2,
    elevation: 2,
  },
  absolute: {
    overlayColor: 'transparent',
  },
});
