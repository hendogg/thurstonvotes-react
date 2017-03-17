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
import {
 Button
} from 'react-native-elements';

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 47.0379,
        longitude: -122.9007,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [
        {///1x
          latlng: {
            latitude: 47.0379,
            longitude: -122.9007
          },
          image: require('../images/location.png'),
          title: "Olympia, WA",

        }, ///
	{///2x
          latlng: {
            latitude: 47.0343,
            longitude: -122.8232
          },
          image: require('../images/location.png'),
          title: "Lacey, WA",

        }, 
	{///3x
          latlng: {
            latitude: 47.0073,
            longitude: -122.9093
          },
          image: require('../images/location.png'),
          title: "Tumwater, WA",

        },///
        {///4x
          latlng: {
            latitude: 47.082048,
            longitude: -122.84571
          },
          image: require('../images/location.png'),
          title: "South Bay (Shincke Road NE), WA",

        }, ///
	{///5x
          latlng: {
            latitude: 47.105166,
            longitude: -122.881046
          },
          image: require('../images/location.png'),
          title: "South Bay (Boston Harbor Road NE), WA",

        }, ///
	{///6x
          latlng: {
            latitude: 46.799285,
            longitude: -122.868814
          },
          image: require('../images/location.png'),
          title: "Bucoda (S Main St), WA",

        },///
	{///7x
          latlng: {
            latitude: 46.861479,
            longitude: -122.848748
          },
          image: require('../images/location.png'),
          title: "Tenino (School District Administration), WA",

        }, ///
	{///8x
          latlng: {
            latitude: 46.850892,
            longitude: -122.487265
          },
          image: require('../images/location.png'),
          title: "Yelm (Lackamas Elementary), WA",

        }, ///
	{///9x
          latlng: {
            latitude: 46.942029,
            longitude: -122.605436
          },
          image: require('../images/location.png'),
          title: "Yelm (Schools Administration), WA",

        },///
	{///10x
          latlng: {
            latitude: 46.888613,
            longitude: -122.689898
          },
          image: require('../images/location.png'),
          title: "Rainier (City Hall), WA",

        },///
	{///11x
          latlng: {
            latitude: 46.798333,
            longitude: -123.01252
          },
          image: require('../images/location.png'),
          title: "Rochester (Grand Mound Center), WA",

        },///	
	{///12x
          latlng: {
            latitude:46.820223,
            longitude: -123.096305
          },
          image: require('../images/location.png'),
          title: "Rochester (Albany Street SW), WA",

        },///
	{///13x
          latlng: {
            latitude: 46.930317,
            longitude: -122.990689
          },
          image: require('../images/location.png'),
          title: "Littlerock, WA",

        },///

	{///14x
          latlng: {
            latitude: 47.085221,
            longitude: -123.015991
          },
          image: require('../images/location.png'),
          title: "Steamboat Island, WA",

        }///	
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
    flexDirection: 'column',
    margin: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  socialStyles: {
    width: width,
    height: 20
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
          style={[styles.tabIcon, {tintColor: '#FFFFFF'}]}
        />
      
  )}
};




