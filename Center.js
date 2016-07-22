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
    constructor(props) {
        super(props);
        this.state = {};
    }

    goBack(){
        const { navigator } = this.props;
        if(navigator) {
            navigator.pop();
        }
    }
    render() {
        return (
            <View>
                <View>
                    <TouchableHighlight style={styles.otherLogin}
                                        underlayColor='#99d9f4'
                                        onPress={this.goBack.bind(this)}
                    >
                        <Image style={styles.goBack}
                               source={require('./src/images/public/back.png')}/>
                    </TouchableHighlight>
                </View>
                <Text>我是用户中心</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    goBack: {
        width: PixelRatio.getPixelSizeForLayoutSize(24/4),
        height: PixelRatio.getPixelSizeForLayoutSize(41/4),
        marginTop: 25
    }

});