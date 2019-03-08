
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

export default class Home extends Component {

    render() {
        return (
            <View>
                <Text style={{ backgroundColor: "#FFFFFF" }} onPress={() => this.props.navigation.navigate('detail')}>主页 </Text>
            </View>
        );
    }
}

