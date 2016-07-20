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
  Navigator
} from 'react-native';
import Login from './Login';

class MyLover extends Component {
  render() {
    return (
        <Navigator
        initialRoute={{ name: 'Login', component: Login }}
        configureScene={(route) => {
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
              }}
        renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

AppRegistry.registerComponent('MyLover', () => MyLover);
