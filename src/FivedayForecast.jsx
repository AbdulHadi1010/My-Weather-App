import { StyleSheet, FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat"; // Plugin for custom date parsing format
import utc from "dayjs/plugin/utc"; // Plugin for UTC handling
import Lottie from "lottie-react-native";
import "dayjs/locale/en"; // Example: Import English locale
import { GlobalStyles } from "./GlobalStyles";
import NewView from "./NewView";
import {useDispatch, useSelector} from 'react-redux';
import { callFiveDay } from "./redux/action";
import lookingdata from './lookingdata.json'

dayjs.extend(customParseFormat);
dayjs.extend(utc);

export default function FivedayForecast() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const tempchangertoC = (num) => {
    return Math.round(num - 273.15);
  }; 

  const CallcallFiveDay = async () => {
    setLoading(true);
    await dispatch(
      callFiveDay({
        location: state?.locationState,
        setLoading: () => {
          setLoading(false);
        },
      }),
      console.log('ijnhuoih', state?.FiveDayApiCall[7])
    );
  }

  useEffect(() => {
    // CallcallFiveDay();
    
  }, []);

  const lists = [
    { id: 0, value: `${state?.FiveDayApiCall}` },
    // { id: 1, value: `${state?.FiveDayApiCall?.list[15]}` },
    // { id: 2, value: `${state?.FiveDayApiCall?.list[23]}` },
    // { id: 3, value: `${state?.FiveDayApiCall?.list[31]}` },
    // { id: 4, value: `${state?.FiveDayApiCall?.list[39]}` },
  ];
  return (
    <LinearGradient
      colors={["#45278B", "#2E335A"]}
      start={{ x: 1.9, y: 1.7 }}
      end={{ x: 1.9, y: 1.2 }}
      locations={[0, 1]}
      style={styles.gradient}
    >
      {loading ? (
        <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Lottie
          style={{ width: 400, height: 400 }}
          source={lookingdata}
          autoPlay
          loop
        />
        <Text style={GlobalStyles.Loadingtxt} >Wait while we fetch your data 😎</Text>
      </View>
      ) : (
        <>
          <FlatList
            data={lists}
            keyExtractor={item => item.id}
            renderItem={( {item, index} ) => <NewView item ={item.value}/>}
          />
          {/* <View style={styles.container}>
        <Text style={GlobalStyles.txt}>
          {dayjs.unix(state?.FiveDayApiCall[7]?.dt).format("dddd, D MMMM")}
        </Text>
        <Text style={GlobalStyles.txt}>{tempchangertoC(state?.FiveDayApiCall[7]?.main?.temp)}°</Text>
        <Text style={GlobalStyles.txt}>
          Feels Like: {tempchangertoC(state?.FiveDayApiCall[7]?.main?.feels_like)}°
        </Text>
        <Text style={GlobalStyles.txt}>Humidity: {state?.FiveDayApiCall[7]?.main?.humidity}</Text> 
         <Text style={GlobalStyles.txt}>{state?.FiveDayApiCall[7]?.weather[0]?.description}</Text> 
      </View> */}
        </>
      )}
    </LinearGradient>
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
