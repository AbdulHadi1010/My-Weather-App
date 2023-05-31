import {StyleSheet, FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'; // Plugin for custom date parsing format
import utc from 'dayjs/plugin/utc'; // Plugin for UTC handling

import 'dayjs/locale/en'; // Example: Import English locale
import {GlobalStyles} from './GlobalStyles';
import {useSelector} from 'react-redux';

export default function NewView({item}) {
  const tempchangertoC = num => {
    return Math.round(num - 273.15);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.datetxt}>
        {dayjs.unix(item?.dt).format('dddd, D MMMM')}
      </Text>
      <Text style={styles.temp}>
        {tempchangertoC(item?.main?.temp)}°
      </Text>
      <Text style={styles.feeltxt}>
        Feels Like: {tempchangertoC(item?.main?.feels_like)}°
      </Text>
      
      <Text style={styles.feeltxt}>
        Humidity: {item?.main?.humidity}
      </Text>
      <Text style={styles.description}>
        {item?.weather[0]?.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  datetxt:{
    color: "white",
    fontSize: 25,
    left: 10,
  },
  description:{
    color: "white",
    textTransform: 'capitalize',
    fontSize: 20
  },
  container: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#2B225A',
    borderColor: '#fff',
    borderWidth: 1.5,
    borderRadius: 25,
    marginBottom: 20
  },
  gradient: {
    flex: 1,
    paddingTop: 50,
  },
  temp:{
    color: "white",
    fontSize: 70,
    fontWeight: '400',
    left: 10,
  },
  feeltxt:{
    color: "#aeb1b5",
    fontSize: 17,
    paddingBottom: 5,
  },
});
