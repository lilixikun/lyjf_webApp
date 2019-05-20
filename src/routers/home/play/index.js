import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import FlatList from '../../../components/fastList'
import { color, adapterUtil } from '../../../utils'
import api from '../../../api';

const baseFont = adapterUtil.unitWidth;
export default class App extends Component {

    renderItem = (item) => {
        return (
            <TouchableOpacity>
                <View style={styles.palyCard}>
                    <Image source={{ uri: item.homeImageUrl }} style={styles.img} resizeMode="cover"></Image>
                    <View style={styles.footer}>
                        <Text style={styles.videoTitle}>{item.videoTitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                style={{ backgroundColor: "#F3F7F9" }}
                url={api.video.videoList}
                renderItem={(item) => this.renderItem(item)}
            />
        )
    }
}

const styles = StyleSheet.create({
    palyCard: {
        flex: 1,
        flexDirection: "column",
        marginHorizontal: 10,
        marginTop: 16,
    },
    img: {
        width: "100%",
        height: 200 * baseFont,
        borderRadius: 8,
        shadowColor: "rgb(0,0,0)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
    },
    footer: {
        justifyContent: "center",
        height: 70 * baseFont,
        backgroundColor: "#fff",
    },
    videoTitle: {
        fontSize: 17 * baseFont,
        color: color.bold,
        marginLeft: 20,
    }
});