/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class flatlistDemo extends Component {
  

  render() {
    return (
      <View style={styles.welcome} >
        <Image style={styles.oval} source={require('./index.jpg')}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({

  welcome: {
    flex:1,
    alignItems:'center',
    marginTop:40    
  },
   oval: {
    width: 50,
    height: 100,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    transform: [
      {scaleX: 7}
    ]
  },
});

AppRegistry.registerComponent('flatlistDemo', () => flatlistDemo);
