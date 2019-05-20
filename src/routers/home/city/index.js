import React, { Component } from 'react';
import { ScrollView, View, FlatList, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { color, screen, adapterUtil, http } from '../../../utils'
import api from '../../../api';
const baseFont = adapterUtil.unitWidth;

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cityList: [],
            SelectIndex: 0, //默认选中的城市
            rankList: [],
            refreshing: false,
            hasMore: true,
            destinationId: ""
        }
    }

    componentDidMount() {
        http(api.ranklist.destinationList, {}).then(({ code, result }) => {
            if (code === 0) {
                this.setState({ cityList: result }, () => this.getRankList(result[0].id))
            }
        });
    }

    getRankList(id) {
        http(api.ranklist.getRankList, { destinationId: id }).then(({ code, result }) => {
            if (code === 0) {
                this.setState({ rankList: result.result, refreshing: false })
            }
        });
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={styles.rankCard}>
                    <Image source={{ uri: item.imageFullUrl }} style={{ width: 100 * baseFont, height: 100 * baseFont }} />
                    <Text style={styles.topicName} numberOfLines={2}>{item.topicName}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    SelectIndex(index, id) {
        this.setState({ SelectIndex: index, destinationId: id, refreshing: true });
        this.getRankList(id)
    }

    //下拉刷新
    handleRefresh = () => {
        const { refreshing, destinationId } = this.state
        if (!refreshing) {
            this.getRankList(destinationId);
        }
    }
    render() {
        const { cityList, SelectIndex, rankList, refreshing } = this.state
        return (
            <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#F3F7F9" }}>
                <ScrollView style={styles.leftList} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    {
                        cityList.map((item, index) => (
                            <TouchableOpacity key={item.id} onPress={() => this.SelectIndex(index, item.id)}>
                                <View style={[styles.cityCard, index === SelectIndex ? styles.selectCity : ""]}>
                                    <Text style={SelectIndex === index ? styles.listItem : styles.listItemSelect}>{item.destination}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
                <FlatList
                    style={{ marginTop: 10, width: 280 * baseFont }}
                    data={rankList}
                    extraData={this.state}
                    refreshing={refreshing}
                    onRefresh={this.handleRefresh}
                    onEndReachedThreshold={0.1}
                    //onEndReached={this.handleLoadMore} //上拉加载数据     
                    keyExtractor={(item, index) => index + item}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    leftList: {
        width: 100 * baseFont,
    },
    selectCity: {
        backgroundColor: "#F3F7F9"
    },
    cityCard: {
        justifyContent: "center",
        backgroundColor: "white",
        alignItems: "center",
        height: 44 * baseFont,
    },
    listItem: {
        color: color.theme,
        fontSize: 16 * baseFont,
        fontWeight: 'bold',
    },
    listItemSelect: {
        color: color.base,
        fontSize: 13 * baseFont,
    },

    rightList: {
        width: 280 * baseFont,
        // flex: 1
    },
    rankCard: {
        backgroundColor: color.white,
        marginHorizontal: 16 * baseFont,
        marginBottom: 10,
        flexDirection: "row"
    },
    topicName: {
        width: 134 * baseFont,
        marginTop: 17 * baseFont,
        fontSize: 14 * baseFont,
        color: color.black,
        marginLeft: 17,
    }
})