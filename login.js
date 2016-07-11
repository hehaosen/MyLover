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
                    <View style={styles.inputBoard}>
                        <View style={styles.userName}>
                            <Image style={styles.inputMail}
                                   source={require('./src/images/login/mail.png')}/>
                        </View>
                        <View style={styles.userName}>
                            <Image style={styles.inputPassWord}
                                   source={require('./src/images/login/password.png')}/>
                        </View>
                    </View>
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
    inputBoard: {
        width: PixelRatio.getPixelSizeForLayoutSize(611/4),
        height: PixelRatio.getPixelSizeForLayoutSize(273/4),
        marginTop: PixelRatio.getPixelSizeForLayoutSize(100/4),
        backgroundColor: 'rgba(39, 94, 219, 0.8)',
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(10/4),
        shadowColor: '#000000',
        shadowOffset: {
            height: PixelRatio.getPixelSizeForLayoutSize(10/4)
        },
        shadowOpacity: 0.5,
        shadowRadius: PixelRatio.getPixelSizeForLayoutSize(6/4)

    },
    bg: {
        resizeMode: Image.resizeMode.cover,
        width: PixelRatio.getPixelSizeForLayoutSize(650/4),
        height: PixelRatio.getPixelSizeForLayoutSize(1320/4),
        alignItems: 'center'
    },
    inputMail: {
        width: PixelRatio.getPixelSizeForLayoutSize(26/4),
        height: PixelRatio.getPixelSizeForLayoutSize(20/4),
        margin: PixelRatio.getPixelSizeForLayoutSize(40/4)
    },
    inputPassWord: {
        width: PixelRatio.getPixelSizeForLayoutSize(17/4),
        height: PixelRatio.getPixelSizeForLayoutSize(24/4),
        margin: PixelRatio.getPixelSizeForLayoutSize(40/4)
    },
    userName: {
        height: PixelRatio.getPixelSizeForLayoutSize(92/4),
    }
});

