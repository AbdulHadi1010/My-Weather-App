import { StyleSheet, FlatList, Text } from "react-native";
import React, { useEffect, useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat"; // Plugin for custom date parsing format
import utc from "dayjs/plugin/utc"; // Plugin for UTC handling

import "dayjs/locale/en"; // Example: Import English locale
import { GlobalStyles } from "./GlobalStyles";
import NewView from "./NewView";
import {useDispatch, useSelector} from 'react-redux';
import { callFiveDay } from "./redux/action";


dayjs.extend(customParseFormat);
dayjs.extend(utc);

export default function FivedayForecast() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const CallcallFiveDay = async () => {
    setLoading(true);
    await dispatch(
      callFiveDay({
        location: state?.locationState,
        setLoading: () => {
          setLoading(false);
        },
      }),
    );
  }

  useEffect(() => {
    CallcallFiveDay();
  }, []);

  const lists = [
    { id: 0, value: `${state?.FiveDayApiCall[7]}` },
    // { id: 1, value: `${state?.FiveDayApiCall?.list[15]}` },
    // { id: 2, value: `${state?.FiveDayApiCall?.list[23]}` },
    // { id: 3, value: `${state?.FiveDayApiCall?.list[31]}` },
    // { id: 4, value: `${state?.FiveDayApiCall?.list[39]}` },
  ];
  console.log("View: ", state?.FiveDayApiCall[7]);
  return (
    <LinearGradient
      colors={["#45278B", "#2E335A"]}
      start={{ x: 1.9, y: 1.7 }}
      end={{ x: 1.9, y: 1.2 }}
      locations={[0, 1]}
      style={styles.gradient}
    >
      {loading ? (
        <Text>Loading.....</Text>
      ) : (
        <>
          <FlatList
            data={lists}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item, index }) => <NewView props={index} display ={item.value}/>}
          />
        </>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingTop: 50,
  },
});
