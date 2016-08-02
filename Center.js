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
            <View style={styles.container}>
                <Image style={styles.headerBg}
                       source={require('./src/images/center/header-bg.png')}/>

                <View style={styles.header}>
                    <TouchableHighlight style={styles.goBackLogin}
                                        underlayColor='#99d9f4'
                                        onPress={this.goBack.bind(this)}
                    >
                        <Image style={styles.goBack}
                               source={require('./src/images/public/back.png')}/>
                    </TouchableHighlight>
                    <Text style={styles.footMark}>我的足迹</Text>
                </View>


                <View style={styles.portrait}>
                    <Image style={styles.portraitImg}
                           source={require('./src/images/center/portrait.png')}/>
                </View>
                <View style={styles.information}>
                    <Text style={styles.userName}>大力神</Text>
                    <View style={styles.address}>
                        <Image style={styles.addressFlag}
                               source={require('./src/images/center/flag.png')}/>
                        <Text style={styles.addressFont}>浙江省 杭州市 西湖区</Text>
                    </View>
                </View>



            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    goBack: {
        width: PixelRatio.getPixelSizeForLayoutSize(24/4),
        height: PixelRatio.getPixelSizeForLayoutSize(41/4),
    },
    header: {
        flexDirection: 'row',
        marginTop: -PixelRatio.getPixelSizeForLayoutSize(650/4),
        flex: 1,
        justifyContent: 'space-between',
        justifyContent: 'center'
    },
    footMark: {
        color: '#0079ff',
        width: PixelRatio.getPixelSizeForLayoutSize(175/4),
        height: PixelRatio.getPixelSizeForLayoutSize(25/4)
    },
    headerBg: {
        width: PixelRatio.getPixelSizeForLayoutSize(750/4),
        height: PixelRatio.getPixelSizeForLayoutSize(400/4),
        flex:1,
        resizeMode: Image.resizeMode.cover,
    },
    portrait: {
        width: PixelRatio.getPixelSizeForLayoutSize(245/4),
        height: PixelRatio.getPixelSizeForLayoutSize(245/4),
        borderColor: '#FFFFFF',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(245/4),
        alignItems: 'center',
        overflow: 'hidden',
        top: PixelRatio.getPixelSizeForLayoutSize(250/4)

    },
    portraitImg: {
        width: PixelRatio.getPixelSizeForLayoutSize(527/4),
        height: PixelRatio.getPixelSizeForLayoutSize(296/4)
    },
    information: {
        backgroundColor: '#2688d5',
        width: PixelRatio.getPixelSizeForLayoutSize(650/4),
        height: PixelRatio.getPixelSizeForLayoutSize(750/4),
        top: PixelRatio.getPixelSizeForLayoutSize(400/4),
        alignItems: 'center'
    },
    userName: {
        top: PixelRatio.getPixelSizeForLayoutSize(105/4),
        fontSize: 20,
        color: '#FFFFFF'
    },
    addressFlag: {
        width: PixelRatio.getPixelSizeForLayoutSize(18/4),
        height: PixelRatio.getPixelSizeForLayoutSize(27/4)
    },
    address: {
        top: PixelRatio.getPixelSizeForLayoutSize(125/4),
        flexDirection: 'row',
        alignItems: 'center'
    },
    addressFont: {
        color: '#FFFFFF',
        left: PixelRatio.getPixelSizeForLayoutSize(20/4)
    },
    goBackLogin: {
        flex: 1,
        left: PixelRatio.getPixelSizeForLayoutSize(35/4)
    }
});