
import React, { Component } from 'react';
import { WebView } from 'react-native';
import DetailView from '../../detail'

export default class My extends Component {

    render() {
        const { id } = this.props.navigation.state.params;
        console.log(this.props.navigation.state.params);

        return (
            <DetailView {...this.props}>
                <WebView source={{ uri: `http://203.110.179.27:60409/app1/index.html#/hotel/detail?id=${id}` }} />
            </DetailView>
        );
    }
}

