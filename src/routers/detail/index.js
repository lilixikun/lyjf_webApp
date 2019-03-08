
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, WebView } from 'react-native';

export default class Home extends Component {

    render() {
        console.log(this.props.navigation.state.params);
        const { id } = this.props.navigation.state.params
        return (
            <WebView source={{ uri: `http://203.110.179.27:60409/app1/index.html#/hotel/detail?id=${id}` }} />
        );
    }
}

