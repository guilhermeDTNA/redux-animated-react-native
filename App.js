import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';

import Home from './src/Home';
import Login from './src/Login';
import Register from './src/Register';

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const Navigator = createStackNavigator({
  Home:{
    screen: Home
  },
  Register:{
    screen: Register
  },
  Login:{
    screen: Login
  }
});

let Navigation = createAppContainer(Navigator);

export default class App extends Component {
  render(){
    return(

      <Provider store={store}>
        <Navigation />
      </Provider>

    );
  }
}