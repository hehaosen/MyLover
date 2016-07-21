/**
 * 用户中心
 * https://github.com/hehaosen/Mylover
 * @Tom-大力神
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    Image,
    TouchableHighlight,
    TextInput
} from 'react-native';
import Header from './Header';

export default class Center extends Component {
    render() {
        return (
            <View>
                <Header></Header>
                <Text>我是用户中心</Text>
            </View>
        );
    }
}