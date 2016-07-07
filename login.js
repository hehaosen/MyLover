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
    PixelRatio,
    Image
} from 'react-native';
export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bg}
                       source={require('./src/images/login/bg.png')}>
                    <Text style={styles.title}>爱+</Text>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(32),
        textAlign: 'center',
        marginTop: PixelRatio.getPixelSizeForLayoutSize(150/4),
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        color: '#FFFFFF'

    },
    bg: {
        resizeMode: Image.resizeMode.cover,
        width: PixelRatio.getPixelSizeForLayoutSize(650/4),
        height: PixelRatio.getPixelSizeForLayoutSize(1320/4)
    }
});

