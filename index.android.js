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
const TabNav = TabNavigator({
  'Home': { screen: App },
  'Current Election': { screen: AppSecond },
  'Ballot Drop Sites': { screen: Maps },
  'Social': { screen: Social },
})

navigationOptions = {
  tabBar: {
      icon: () => (
        <Image
          source={require('./imgs/social/tc.png')}
          style={[styles.tabIcon, {tintColor: 'FFFFFF'}]}
        />
  
    )
  }
};

AppRegistry.registerComponent('voting', () => TabNav);



