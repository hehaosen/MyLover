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
            <View style={styles.main}>
                <Image style={styles.headerBg}
                       source={require('./src/images/center/header-bg.png')}/>
                <View style={styles.header}>
                    <TouchableHighlight style={styles.otherLogin}
                                        underlayColor='#99d9f4'
                                        onPress={this.goBack.bind(this)}
                    >
                        <Image style={styles.goBack}
                               source={require('./src/images/public/back.png')}/>
                    </TouchableHighlight>
                    <Text style={styles.footMark}>我的足迹</Text>
                </View>

                <View style={styles.portrait}>
                    <Image style={styles.goBack}
                           source={require('./src/images/public/back.png')}/>
                </View>
                <View>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        position:'relative',
        alignItems: 'center',

    },
    goBack: {
        width: PixelRatio.getPixelSizeForLayoutSize(24/4),
        height: PixelRatio.getPixelSizeForLayoutSize(41/4),
        left: PixelRatio.getPixelSizeForLayoutSize(35/4)
    },
    header: {
        flexDirection: 'row',
        marginTop: 25,
        position: 'absolute',
        width:PixelRatio.getPixelSizeForLayoutSize(750/4)
    },
    footMark: {
        left: PixelRatio.getPixelSizeForLayoutSize(500/4),
        color: '#0079ff'
    },
    headerBg: {
        width: PixelRatio.getPixelSizeForLayoutSize(750/4),
        height: PixelRatio.getPixelSizeForLayoutSize(420/4),
        left: -PixelRatio.getPixelSizeForLayoutSize(420/20),
        resizeMode: Image.resizeMode.cover,
        position: 'absolute'
    },
    portrait:{
        width: PixelRatio.getPixelSizeForLayoutSize(245/4),
        height: PixelRatio.getPixelSizeForLayoutSize(245/4),
        borderColor: '#FFFFFF',
        borderWidth: 3,
        borderStyle: 'solid',
    }
});