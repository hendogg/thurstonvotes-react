/**
 * l9 Map Travel
 * https://github.com/kobkrit/learn-react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, ScrollView, Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';
var {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps';
import LocationButton from './LocationButton.js';

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [
        {
          latlng: {
            latitude: 47.0379,
            longitude: -122.9007
          },
          image: require('../images/location.png'),
          title: "Olympia, WA",
          description: "A city in Thurston County"
        }, {
          latlng: {
            latitude: 47.0343,
            longitude: -122.8232
          },
          image: require('../images/location.png'),
          title: "Lacey, WA",
          description: "A city in Thurston County"
        }, {
          latlng: {
            latitude: 47.0073,
            longitude: -122.9093
          },
          image: require('../images/location.png'),
          title: "Tumwater, WA",
          description: "A city in Thurston County"
        }
      ]
    };
    this.onRegionChange = this.onRegionChange.bind(this);
    this.moveMaptoLocation = this.moveMaptoLocation.bind(this);
  }

  onRegionChange(region) {
    this.setState({region});
  }

  moveMaptoLocation(latlng) {
    this.refs.map.animateToRegion({
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      ...latlng,
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>

        <MapView ref="map" style={styles.map} region={this.state.region} onRegionChange={this.onRegionChange}>

          {this.state.markers.map((marker, i) => (<MapView.Marker key={i} coordinate={marker.latlng} image={marker.image} title={marker.title} description={marker.description}/>))}
        </MapView>

           <View style={styles.containerInner}>
	   <ScrollView>
          {this.state.markers.map((marker, i) => (
            <LocationButton key={i}
              moveMaptoLocation={this.moveMaptoLocation}
              marker={marker}/>
          ))}
	  </ScrollView>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  containerInner: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  map: {
    width: width,
    height: height*2/3
  },
  tabIcon: {
    width: 20,
    height: 20,
  }
});




Maps.navigationOptions = {
  tabBar: {
      icon: () => (
        <Image
          source={require('../imgs/social/mapIcon.png')}
          style={[styles.tabIcon, {tintColor: 'midnightblue'}]}
        />
      
  )}
};




