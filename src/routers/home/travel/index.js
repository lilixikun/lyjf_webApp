import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import FlatList from '../../../components/fastList'
import TravelCard from '../../../components/t-card'
import api from '../../../api';

export default class App extends Component {

    state = {
        refreshing: false,
        pageNum: 1,
        hasMore: true,
        dataList: []
    }

    renderItem = (item) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('detail', {
                id: item.id
            })}>
                <TravelCard item={item} />
            </TouchableOpacity >
        )
    }


    render() {
        return (
            <FlatList
                url={api.travel.findByCondition}
                renderItem={(item) => this.renderItem(item)}
            />
        )
    }
}

