import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect,useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GlobalStyles} from './GlobalStyles';
import MyView from './MyView';
import {BlurView} from '@react-native-community/blur';
import dayjs from 'dayjs';
import {useDispatch, useSelector} from 'react-redux';
import {callAirPollution} from './redux/action';
import Lottie from "lottie-react-native";
import chicken from './chicken.json'


export default function Details() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const data1 = [
    { key: `Sunrise: ${dayjs.unix(state?.MainApiCall?.sys?.sunrise).format('h:mm A')}` },
    { key: `Sunset: ${dayjs.unix(state?.MainApiCall?.sys?.sunset).format('h:mm A')}` },
    { key: `Pressure: ${state?.MainApiCall?.main?.pressure}` },
    { key: `Humidity: ${state?.MainApiCall?.main?.humidity}` },
    { key: `Wind: Speed: ${state?.MainApiCall?.wind?.speed}° Degree: ${state?.MainApiCall?.wind?.deg}` },
  ];
  
  const fetchcallAirPollution = async () => {
    setLoading(true);
    await dispatch(
      callAirPollution({
        location: state?.locationState,
        setLoading: () => {
          setLoading(false);
        },
      }),
    );
  };

  useEffect(() => {
    // fetchcallAirPollution();
  }, []);

  return (
    <LinearGradient
      colors={['#45278B', '#2E335A']}
      start={{x: 1, y: 1.7}}
      end={{x: 2, y: 0.5}}
      locations={[0, 1]}
      style={styles.gradient}>
      {loading ? (
       <View
       style={{
         flex: 1,
         alignItems: "center",
         justifyContent: "center",
       }}
     >
       <Lottie
         style={{ height: 400 }}
         source={chicken}
         autoPlay
         loop
       />
       <Text style={GlobalStyles.Loadingtxt} >The Chick is looking for data 🤗</Text>
     </View>
      ) : (
        <>
          <View style={styles.mainView}>
            <BlurView
              style={GlobalStyles.absolute}
              Type="light"
              Amount={20}
              reducedTransparencyFallbackColor="white">
              <Text style={GlobalStyles.txt}>
                Air Quality: {state?.AirIndexCall?.main?.aqi}
              </Text>
            </BlurView>
          </View>

          <FlatList
            data={data1}
            renderItem={({item}) => (
              <MyView
                props={<Text style={GlobalStyles.txt}>{item.key}</Text>}
              />
            )}
            numColumns={2}
          />
        </>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainView: {
    margin: 10,
    padding: 50,
    backgroundColor: '#2B225A',
    borderColor: '#000',
    borderWidth: 1.5,
    borderRadius: 20,
  },
  gradient: {
    flex: 1,
    paddingTop: 50,
  },
});
