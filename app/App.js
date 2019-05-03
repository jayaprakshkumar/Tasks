import React, { Component } from 'react';
import { Platform } from 'react-native';
import store from './Redux';
import { Provider } from 'react-redux';
import Application from './Component/Application';

const ostype = Platform.select({
  ios: 'ios',
  android: 'android',
});


export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}
