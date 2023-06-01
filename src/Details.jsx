import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GlobalStyles} from './GlobalStyles';
import MyView from './MyView';
import {BlurView} from '@react-native-community/blur';
import dayjs from 'dayjs';
import {useDispatch, useSelector} from 'react-redux';
import {callAirPollution} from './redux/action';
import Lottie from 'lottie-react-native';
import chicken from './chicken.json';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Details() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const myAirIcon = <Icon name="air" size={25} color="#fff" />;
  const mySunriseIcon = <Icon1 name="sunrise" size={25} color="#fff" />;
  const mySunsetIcon = <Icon1 name="sunset" size={25} color="#fff" />;
  const myWindIcon = <Icon1 name="wind" size={25} color="#fff" />;
  const myHumidityIcon = <Icon2 name="water-percent" size={25} color="#fff" />;
  const myPressureIcon = <Icon2 name="waves-arrow-up" size={25} color="#fff" />;

  const data1 = [
    {
      icon: myAirIcon,
      string: 'Air Index:',
      key: `${state?.AirIndexCall?.main?.aqi} aqi`,
    },
    {
      icon: mySunriseIcon,
      string: 'Sunrise:',
      key: `${dayjs.unix(state?.MainApiCall?.sys?.sunrise).format('h:mm A')}`,
    },
    {
      icon: mySunsetIcon,
      string: 'Sunset:',
      key: `${dayjs.unix(state?.MainApiCall?.sys?.sunset).format('h:mm A')}`,
    },
    {
      icon: myPressureIcon,
      string: 'Pressure:',
      key: `${state?.MainApiCall?.main?.pressure} atm`,
    },
    {
      icon: myHumidityIcon,
      string: 'Humidity:',
      key: `${state?.MainApiCall?.main?.humidity} g.m-3`,
    },
    {
      icon: myWindIcon,
      string: 'Wind:',
      key: `${state?.MainApiCall?.wind?.speed} km/h`,
    },
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
    fetchcallAirPollution();
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
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Lottie style={{height: 400}} source={chicken} autoPlay loop />
          <Text style={GlobalStyles.Loadingtxt}>
            The Chick is looking for data 🤗
          </Text>
        </View>
      ) : (
        <>
          <FlatList
            contentContainerStyle={{paddingBottom: 70, paddingTop: 20}}
            data={data1}
            renderItem={({item, index}) => (
              <MyView
                props={
                  <>
                    <View style={styles.cont}>
                      {item.icon}
                      <Text style={styles.txt}>{item.string}</Text>
                    </View>
                    <View style={styles.cont}>
                    <Text style={styles.keytxt}>
                      {'\n'}
                      {item.key}
                    </Text>
                    </View>
                  </>
                }
              />
            )}
          />
        </>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  cont: {
    display: 'flex',
    flexDirection: 'row',
  },
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
  },
  txt: {
    color: 'white',
    opacity: 0.6,
    fontSize: 30,
    paddingLeft: 10,
    bottom: 5,
  },
  keytxt: {
    color: 'white',
    fontSize: 25,
    top: 30,
    left: 60
  },
});
