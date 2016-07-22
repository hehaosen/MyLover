/**
 * 头部共用组建
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

export default class Header extends Component {
    goBack() {

    }
    render() {
        return (
            <View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    goBack: {
        width: PixelRatio.getPixelSizeForLayoutSize(24/4),
        height: PixelRatio.getPixelSizeForLayoutSize(41/4),
        marginTop: 25
    }

});
