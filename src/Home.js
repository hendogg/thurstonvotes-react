import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  WebView,
  StyleSheet,
} from 'react-native';


class Home extends Component {

// creating props
  static propTypes = {
    url: PropTypes.string,
    navigator: PropTypes.object,
  };

// take out this scene, or go back
  goBack() {
    this.props.navigator.pop();
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.toolbar} onPress={() => this.goBack()}>
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        <WebView source={{ uri: this.props.url }} style={styles.content} />
      </View>
    );
  }
}

// Stylesheets for the toolbar
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#88b5fb',
    padding: 20,
  },
  text: {
    color: '#fff', 
  },
  content: {
    flex: 1,
  },
});

export default Home;