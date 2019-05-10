
import React, { Component } from 'react';
import { Platform, TouchableOpacity, Text, View, Image } from 'react-native';

export default class My extends Component {

    render() {
        console.log("我开始启动调试了");
        return (
            <View>
                <Text>ffff!!!</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('detail', {
                    id: "19",
                    title:"酒店详情"
                })}>
                    <Image source={require("../../assets/my/setting.png")} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>
        );
    }
}

