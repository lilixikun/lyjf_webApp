import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import FlatList from '../../../components/fastList'
import HCard from '../../../components/h-card'
import api from '../../../api';

export default class App extends Component {

    renderItem = (item) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('detail', {
                    id: item.id
                })}>
                <HCard item={item} />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                url={api.hotel.findHotelList}
                renderItem={(item) => this.renderItem(item)}
            />
        )
    }
}
