import React, { Component } from 'react';
import { View, Image } from 'react-native'
import { adapterUtil } from "../utils"
export default class Spalch extends Component {


    componentDidMount() {
        console.log(this.props)
        setTimeout(() => {
            this.props.navigation.replace("home")
        }, 2000)
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Image
                    resizeMode="contain"
                    source={require("../assets/spalch/startbg2.png")}
                    style={{ width: adapterUtil.adapterUtil, height: adapterUtil.height }} />
            </View>
        )
    }
}