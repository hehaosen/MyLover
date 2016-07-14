/**
 * 登录界面组件
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
                            <TextInput
                                keyboardType='email-address'
                                placeholder='请输入你的邮箱 例:username@gmail.com'
                                style={styles.inputText}/>
                        </View>
                        <View style={styles.passWord}>
                            <Image style={styles.inputPassWord}
                                   source={require('./src/images/login/password.png')}/>
                            <TextInput
                                keyboardType='email-address'
                                password={true}
                                placeholder='请输入你的密码'
                                style={styles.passWordText}/>
                        </View>
                        <TouchableHighlight style={styles.loginButton}
                                            underlayColor='#99d9f4'
                        >
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.orLine}>
                        <View style={styles.line}></View>
                        <Text style={styles.or}>or</Text>
                        <View style={styles.line}></View>
                    </View>
                    <TouchableHighlight style={styles.otherLogin}
                                        underlayColor='#99d9f4'
                    >
                        <Text style={styles.loginText}>微信 登陆</Text>
                    </TouchableHighlight>
                </Image>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
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
        shadowRadius: PixelRatio.getPixelSizeForLayoutSize(6/4),

    },
    bg: {
        resizeMode: Image.resizeMode.cover,
        width: PixelRatio.getPixelSizeForLayoutSize(750/4),
        height: PixelRatio.getPixelSizeForLayoutSize(1440/4),
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
        width: PixelRatio.getPixelSizeForLayoutSize(611/4),
        height: PixelRatio.getPixelSizeForLayoutSize(92/4),
        borderColor: '#2556c4',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        flexDirection: 'row'
    },
    passWord: {
        width: PixelRatio.getPixelSizeForLayoutSize(611/4),
        height: PixelRatio.getPixelSizeForLayoutSize(92/4),
        borderColor: '#5582e9',
        borderTopWidth: 1,
        borderStyle: 'solid',
        flexDirection: 'row'

    },
    loginButton: {
        width: PixelRatio.getPixelSizeForLayoutSize(611/4),
        height: PixelRatio.getPixelSizeForLayoutSize(92/4),
        backgroundColor: '#14a6de',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: PixelRatio.getPixelSizeForLayoutSize(10/4),
        borderBottomRightRadius: PixelRatio.getPixelSizeForLayoutSize(10/4)
    },
    loginText: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
        color: '#FFFFFF'
    },
    inputText: {
        color: '#FFFFFF',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
        width: PixelRatio.getPixelSizeForLayoutSize(435/4),
        height: PixelRatio.getPixelSizeForLayoutSize(35/4),
        marginTop: PixelRatio.getPixelSizeForLayoutSize(36/4)
    },
    passWordText: {
        color: '#FFFFFF',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
        width: PixelRatio.getPixelSizeForLayoutSize(435/4),
        height: PixelRatio.getPixelSizeForLayoutSize(35/4),
        marginTop: PixelRatio.getPixelSizeForLayoutSize(36/4),
        marginLeft: PixelRatio.getPixelSizeForLayoutSize(8/4)
    },
    orLine: {
        width: PixelRatio.getPixelSizeForLayoutSize(611/4),
        height: PixelRatio.getPixelSizeForLayoutSize(35/4),
        flexDirection: 'row',
        marginTop: PixelRatio.getPixelSizeForLayoutSize(45/4),
        alignItems: 'center'

    },
    line: {
        borderColor: '#FFFFFF',
        borderTopWidth: 1,
        borderStyle: 'solid',
        flex:1
    },
    or: {
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
        width: PixelRatio.getPixelSizeForLayoutSize(60/4),
        height: PixelRatio.getPixelSizeForLayoutSize(40/4),
        color: '#FFFFFF'
    },
    otherLogin: {
        width: PixelRatio.getPixelSizeForLayoutSize(611/4),
        height: PixelRatio.getPixelSizeForLayoutSize(92/4),
        backgroundColor: '#3b5998',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(10/4),
    }
});

