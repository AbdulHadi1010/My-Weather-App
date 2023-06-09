const initialState = {
  locationState: [],
  MainApiCall: [],
  AirIndexCall: [],
  FiveDayApiCall: [],
};

const reducer = (state = initialState, {type, ...rest}) => {
  switch (type) {
    case 'LocationUpdate':
      return {...state, locationState: rest.data};
    case 'MainApiUpdate':
      return {...state, MainApiCall: rest.data};
    case 'AirIndexApiUpdate':
      return {...state, AirIndexCall: rest.data};
    case 'FiveDayApiUpdate':
      return {...state, FiveDayApiCall: rest.data};
    default:
      return state;
  }
};

export default reducer;
