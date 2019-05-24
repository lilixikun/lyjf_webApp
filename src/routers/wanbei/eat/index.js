import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import FlatList from '../../../components/fastList'
import api from '../../../api';
import { color } from '../../../utils';

export default class App extends Component {

    renderItem = (item) => {
        return (
            <TouchableOpacity >
                <View style={styles.hotelcard}>
                    <Image style={styles.img} source={{ uri: item.restaurantImageList[0].url || "" }} />
                    <View style={styles.cardContent}>
                        <Text style={styles.hotelName}>{item.restaurantName}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ color: color.red, fontSize: 16 }}>{item.perCapita}玩呗</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: color.theme }}>{item.collectCount}</Text>
                                <Text>收藏</Text>
                            </View>
                        </View>
                        <Text style={styles.address}>{item.address}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    url={api.restaurant.getDataList}
                    renderItem={(item) => this.renderItem(item)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hotelcard: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#FFFFFF',
        height: 140,
        padding: 20,
    },
    img: {
        width: 130,
        height: 100,
        marginRight: 15,
        borderRadius: 4,
    },
    cardContent: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center",
    },
    hotelName: {
        color: color.black,
        fontSize: 16,
    },
    address: {
        fontSize: 12,
        color: color.color6B2
    }
});