import GetLocation from "react-native-get-location";
import axios from "axios";

export const Locationfetch = () => async (dispatch) => {
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
export const callApi = (location) => async (dispatch) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${location?.latitude}&lon=${location?.longitude}&appid=134bcc17ff7fbd17a3ec89f642825260`,
    headers: {},
  };
  axios
    .request(config)
    .then((result) => {
      dispatch({
        type: "MainApiUpdate",
        data: result.data,
      });
  })
    .catch(error => {
      console.log(error);
    });
};
export const callAirPollution = (location) => async (dispatch) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://api.openweathermap.org/data/2.5/air_pollution?lat=${location?.latitude}&lon=${location?.longitude}&appid=134bcc17ff7fbd17a3ec89f642825260`,
    headers: {},
  };

  axios
    .request(config)
    .then((result) => {
      dispatch({
        type: "AirIndexApiUpdate",
        data: result,
      });
  })
    .catch(error => {
      console.log(error);
    });
};
export const callFiveDay = (location) => async (dispatch) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://api.openweathermap.org/data/2.5/forecast?lat=${location?.latitude}&lon=${location?.longitude}&appid=134bcc17ff7fbd17a3ec89f642825260`,
    headers: {},
  };

  axios
    .request(config)
    .then((result) => {
      dispatch({
        type: "FiveDayApiUpdate",
        data: result,
      });
  })
    .catch(error => {
      console.log(error);
    });
};