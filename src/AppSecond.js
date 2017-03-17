// npm install --save react-navigation

import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
//  Button,
  View,
  Image,
  Dimensions,
  WebView,
  Navigator,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import {
  Button
} from 'react-native-elements';

// Get the width of the screen, use it for width and height to make a square
var { width} = Dimensions.get('window');
var box_count = 3;
var box_width = width / box_count - 30;

// to display pdf, this bypass security set up of iOS
const gDoc = 'http://docs.google.com/gview?embedded=true&url='
// Icon images 

const returnDistrict = require('../imgs/returnDistrict.png');
const registration = require('../imgs/registrationDeadlines.png');
const votersPamphlet = require('../imgs/votersPamphlet.png');
const sampleBallot = require('../imgs/sampleBallot.png');
const military = require('../imgs/military.png');
const accessible = require('../imgs/accessible.png');
const statistics = require('../imgs/statistics.png');
const ballotReceived = require('../imgs/ballotReceived.png');
const needBallot = require('../imgs/needBallot.png');
const results = require('../imgs/results.png');
const resultsCanvas = require('../imgs/results-canvassing.png');

const eResultsCanvas = 'http://www.co.thurston.wa.us/auditor/Elections/2017elections/February/results_schedule.htm'
const eReturnDistrict = 'http://www.co.thurston.wa.us/auditor/Elections/redirects/br-redirect.htm'
const eRegistration = 'http://www.co.thurston.wa.us/auditor/Elections/election_dates.htm'
const eVotersPamphlet = 'http://www.co.thurston.wa.us/auditor/elections/redirects/vp-redirect.htm'
const eSampleBallot = gDoc + 'http://www.co.thurston.wa.us/auditor/Elections/2017elections/February/sample_ballot.pdf'
const eMilitary = 'http://www.co.thurston.wa.us/auditor/Elections/voter_reg/military.htm'
const eAccessible = 'http://www.co.thurston.wa.us/auditor/elections/redirects/av-redirect.htm'
const eStatistics = gDoc + 'http://www.co.thurston.wa.us/auditor/Elections/2016elections/November/stats.pdf'
const eBallotReceived = 'https://weiapplets.sos.wa.gov/MyVote/#/login'
const eNeedBallot= 'http://www.co.thurston.wa.us/auditor/elections/voter_reg/ballot.htm'
const eResults = 'http://www.co.thurston.wa.us/auditor/Elections/history/archive.htm'




// Tabbar icons
const face = require('../imgs/social/facebook.png');
const tweet = require('../imgs/social/twitter.png');
const insta = require('../imgs/social/instagram.png');
const utube = require('../imgs/social/youtube.png');
const site = require('../imgs/social/tc.png');

// TabBar URLs
const eFace = 'https://www.facebook.com/Thurston-County-Auditors-Office-328306377190679/'
const eTweet = 'https://twitter.com/TCAuditor'
const eInsta = 'https://www.instagram.com/thurstonauditor/'
const eUtube = 'https://www.youtube.com/channel/UCxORZbqlmF1kADpJAu9EIOg'
const eSite = 'http://www.co.thurston.wa.us/auditor/'



class AppSecond extends Component {
  // Create the state
  state = {
    links: [
      {title:'Votes', url: eRegistration, img: registration, title: 'Registration Deadlines' },
      {title:'Votes', url: eBallotReceived, img: ballotReceived, title: "Ballot Received" },
      {title:'Votes', url: eNeedBallot , img: needBallot , title: 'Need a Ballot'  },

      {title:'Votes', url: eResults, img: results, title: 'Results' },
      {title:'Votes', url: eResultsCanvas, img: resultsCanvas, title: 'Canvassing Results' },
      {title:'Votes', url: eStatistics , img: statistics , title: 'Statistics'},

      {title:'Votes', url: eReturnDistrict, img: returnDistrict, title: 'Returns by District' },
      {title:'Votes', url: eVotersPamphlet, img: votersPamphlet, title: 'Voter Pamphlet' },
      {title:'Votes', url: eSampleBallot, img: sampleBallot, title: 'Sample Ballot' },


    ],

  };

state2 = {
    links: [
      {title:'Votes', url: eFace, img: face, title: 'Facebook' },
      {title:'Votes', url: eInsta, img: insta, title: 'Instagram' },
      {title:'Votes', url: eTweet , img: tweet, title: 'Twitter'  },
      {title:'Votes', url: eUtube , img: utube, title: 'Youtube'  },
      {title:'Votes', url: eSite, img: site, title: 'Visit Our Website!' },
      
    ],

  };


// function to be called later
  onPressButton(url) {
    // Let
    const urls = Linking.openURL(url) 
    // onPressButton navigate to the url and push it to the view
    this.refs.navigator.push({ urls }); 
  }


// function to be called later
// EX5 arrow anonymous function assign it to renderButton variable
  renderButton = (btn, index) => {
    return (   
      <TouchableOpacity
        // each item in the object from the state has an 'index'
        key={index}
        // btn.url: just get the url from the state
        // btn.title: just get the title from the state
        onPress={() => this.onPressButton(btn.url)}
        style={styles.item}>
        <Image source={btn.img} style={styles.image}></Image>
        <Text style={styles.text}>{btn.title}</Text>
      </TouchableOpacity>
    );
  }

  renderSocialButton = (btn, index) => {
    return (   
      <TouchableOpacity
        // each item in the object from the state has an 'index'
        key={index}
        // btn.url: just get the url from the state
        // btn.title: just get the title from the state
        onPress={() => this.onPressButton(btn.url)}
        style={styles.itemSocial}>
        <Image source={btn.img} style={styles.imageSocial}></Image>
        <Text style={styles.text}>{btn.title}</Text>
      </TouchableOpacity>
    );
  }

// on website
// style={{marginTop: 20}}
// function to be called later
  renderScene = (route, navigator) => {
    if (route.url) {
      return (
        <Home url={route.url} navigator={navigator} />
      );
    }


// the main view display
    return (
      <View style={styles.box}>

          
          <View style={styles.box2}>
            <Image source={require('../imgs/bg/header-current-election-crop.png')}
                 style={styles.cover} />
          </View> 

          <View style={[styles.boxx, {justifyContent:'space-around'}]}>
						{this.state2.links.map(this.renderSocialButton)}
	  </View>
         
	<View style={styles.box3}>         
            <View style={[styles.container, {flexWrap:'wrap'}]}>  
                {this.state.links.map(this.renderButton)}
            </View> 
          </View>

      </View>
    );
  }


// the render method of the class component
  render() {
    return (
      <Navigator
        ref="navigator"
        renderScene={this.renderScene}
        initialRoute={{}}
        configureScene={(route) => (
          Navigator.SceneConfigs.FloatFromBottom
        )}
      />
    );
  }
}


const styles = StyleSheet.create (
{
  container: {
    padding: 15,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  item:
  { width: box_width, 
    height: box_width, 
    marginBottom: 35, 
    marginTop: 10, 
  },
  text: {
    color: 'black',
    textAlign: 'center',
    paddingBottom: 15,

  },
  image: {
    width: box_width , 
    height: box_width ,
  },
    box: {
      flex: 1,
  },
  box1: 
    {
      flex: 2,
      backgroundColor: 'black',
  },
    box2: 
    {
      flex: 10,
      flexDirection: "row",
    //  alignItems: "stretch",

      
  },
    cover: 
    {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'stretch'
  },
    box3: {
      width: width,
 //     backgroundColor: '#CEE0FD',
      backgroundColor: '#FFFFFF',
      height: width + 50,
      //paddingTop: 10,
  },
  socialStyles: {
    width: width,
    height: 20
    },
  tabIcon: {
    width: 20,
    height: 20,
  },
boxx:
  {
    flex: 4,
    flexDirection: "row",
    backgroundColor: 'blue',
 //   alignItems: "stretch",
    justifyContent: 'space-around',


},
imageSocial: {
    width: 30 , 
    height: 30 ,
    //alignSelf: 'auto',
  },
    itemSocial: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    width: 30,
    height: 30,
    alignSelf: 'auto',
    //justifyContent: 'space-between'
    },
});

// newly added for tabbar navigartions
AppSecond.navigationOptions = {
  tabBar: {
      icon: () => (
        <Image
          source={require('../imgs/social/www.png')}
          style={[styles.tabIcon, {tintColor: 'midnightblue'}]}
        />
  
    )
  }
};

export default AppSecond;
