import { StyleSheet, FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat"; // Plugin for custom date parsing format
import utc from "dayjs/plugin/utc"; // Plugin for UTC handling

import "dayjs/locale/en"; // Example: Import English locale
import { GlobalStyles } from "./GlobalStyles";
import { useSelector } from "react-redux";

export default function NewView({ item }) {
  const tempchangertoC = (num) => {
    return Math.round(num - 273.15);
  }; 
  // const state = useSelector(state => state);
console.log("dwadad", item[7])
  return (

      <View style={styles.container}>
        {/* <Text style={GlobalStyles.txt}>
          {dayjs.unix(item?.dt).format("dddd, D MMMM")}
        </Text> */}
        {/* <Text style={GlobalStyles.txt}>{tempchangertoC(item?.main?.temp)}°</Text>
        <Text style={GlobalStyles.txt}>
          Feels Like: {tempchangertoC(item?.main?.feels_like)}°
        </Text> */}
        {/* <Text style={GlobalStyles.txt}>Humidity: {item?.main?.humidity}</Text> */}
        {/* <Text style={GlobalStyles.txt}>{item?.weather[0]?.description}</Text> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#2B225A",
    borderColor: "#fff",
    borderWidth: 1.5,
    borderRadius: 25,
  },
  gradient: {
    flex: 1,
    paddingTop: 50,
  },
});
