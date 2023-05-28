import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation';
// import Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './src/redux/reducers/reducer';
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
