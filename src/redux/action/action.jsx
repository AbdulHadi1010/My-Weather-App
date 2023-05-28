import GetLocation from 'react-native-get-location';
import axios from 'axios';

export const Locationfetch = () => async dispatch => {
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 60000,
  })
    .then(result => {
      dispatch({
        type: 'LocationUpdate',
        data: result,
      });
    })
    .catch(error => {
      const {code, message} = error;
      console.warn(code, message);
    });
};
export const callApi = (vals) => async dispatch => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${vals?.location?.latitude}&lon=${vals?.location?.longitude}&appid=134bcc17ff7fbd17a3ec89f642825260`,
    headers: {},
  };
  axios
    .request(config)
    .then(result => {
      dispatch({
        type: 'MainApiUpdate',
        data: result.data,
      });
      vals?.setLoading();
    })
    .catch(error => {
      console.log(error);
    });
};
export const callAirPollution = (vals) => async dispatch => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://api.openweathermap.org/data/2.5/air_pollution?lat=${vals?.location?.latitude}&lon=${vals?.location?.longitude}&appid=134bcc17ff7fbd17a3ec89f642825260`,
    headers: {},
  };

  axios
    .request(config)
    .then(result => {
      dispatch({
        type: 'AirIndexApiUpdate',
        data: result.data.list[0],
      });
      console.log("wadwd", result.data.list[0])
      vals?.setLoading();
    })
    .catch(error => {
      console.log(error);
    });
};
export const callFiveDay = vals => async dispatch => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://api.openweathermap.org/data/2.5/forecast?lat=${location?.latitude}&lon=${location?.longitude}&appid=134bcc17ff7fbd17a3ec89f642825260`,
    headers: {},
  };

  axios
    .request(config)
    .then(result => {
      dispatch({
        type: 'FiveDayApiUpdate',
        data: result,
      });
    })
    .catch(error => {
      console.log(error);
    });
};
