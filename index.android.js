import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import App from './src/App'
import Social from './src/Social'
import AppSecond from './src/AppSecond'
import Maps from './src/Maps'

class voting extends Component {

  render(){
    const { navigation } = this.props;
      return (
        <App />
      );
  }
}


// navigation object
const SimpleApp = TabNavigator({
  'Home': { screen: App },
  'Current Election': { screen: AppSecond },
  'Ballot Drop Sites': { screen: Maps },
  'Social': { screen: Social },
})

AppRegistry.registerComponent('voting', () => SimpleApp);



