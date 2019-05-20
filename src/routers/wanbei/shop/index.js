import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Text } from 'react-native';
import FlatList from '../../../components/fastList'
import SCard from '../../../components/shopCard'
import api from '../../../api';
import { color } from '../../../utils';

export default class App extends Component {

    renderItem = (item) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('detail', {
                    id: item.id
                })}>
                <SCard item={item} />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    url={api.shop.shopList}
                    renderItem={(item) => this.renderItem(item)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchContent: {
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: color.white,
        height: 36,
        paddingHorizontal: 20,
        alignItems: "center",
    }
})