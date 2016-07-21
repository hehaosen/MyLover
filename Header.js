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
                <TouchableHighlight style={styles.otherLogin}
                                    underlayColor='#99d9f4'
                                    onPress={this.goBack.bind(this)}
                >
                    <Image style={styles.goBack}
                           source={require('./src/images/public/back.png')}/>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});
