import {StyleSheet, FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'; // Plugin for custom date parsing format
import utc from 'dayjs/plugin/utc'; // Plugin for UTC handling
import Lottie from 'lottie-react-native';
import 'dayjs/locale/en'; // Example: Import English locale
import {GlobalStyles} from './GlobalStyles';
import NewView from './NewView';
import {useDispatch, useSelector} from 'react-redux';
import {callFiveDay} from './redux/action';
import lookingdata from './lookingdata.json';

dayjs.extend(customParseFormat);
dayjs.extend(utc);

export default function FivedayForecast() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [MyList, setMyList] = useState(null);
  const [loading, setLoading] = useState(true);

  const CallcallFiveDay = async () => {
    setLoading(true);
    await dispatch(
      callFiveDay({
        location: state?.locationState,
        setLoading: () => {
          setLoading(false);
        },
        setData: data => {
          setMyList([
            {id: 0, value: data[7]},
            {id: 1, value: data[15]},
            {id: 2, value: data[23]},
            {id: 3, value: data[31]},
            {id: 4, value: data[39]},
          ]);
        },
      }),
    );
  };

  useEffect(() => {
    CallcallFiveDay();
  }, []);

  return (
    <LinearGradient
      colors={['#45278B', '#2E335A']}
      start={{x: 1.9, y: 1.7}}
      end={{x: 1.9, y: 1.2}}
      locations={[0, 1]}
      style={styles.gradient}>
      {loading ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Lottie
            style={{width: 400, height: 400}}
            source={lookingdata}
            autoPlay
            loop
          />
          <Text style={GlobalStyles.Loadingtxt}>
            Wait while we fetch your data 
          </Text>
        </View>
      ) : (
        <>
          <FlatList
          contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
            data={MyList}
            keyExtractor={item => item.id}
            renderItem={({item}) => <NewView item = {item.value}/>}
          />
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
    backgroundColor: '#2B225A',
    borderColor: '#fff',
    borderWidth: 1.5,
    borderRadius: 25,
  },
  gradient: {
    flex: 1,
    // paddingTop: 50,
  },
  container: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#2B225A',
    borderColor: '#fff',
    borderWidth: 1.5,
    borderRadius: 25,
  },
});
