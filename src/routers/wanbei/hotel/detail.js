
import React, { Component } from 'react';
import { WebView } from 'react-native';
import DetailView from '../../detail'
import baseUrl from '../../../api/baseUrl'

export default class My extends Component {

    render() {
        const { id } = this.props.navigation.state.params;
        return (
            <DetailView {...this.props}>
                <WebView source={{ uri: `${baseUrl}/app1/index.html#/hotel/detail?id=${id}` }} />
            </DetailView>
        );
    }
}

