import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { http } from '../../utils'

export default class App extends Component {

    static defaultProps = {
        url: "",
        data: {},
        renderItem: ""
    }

    state = {
        refreshing: false,
        pageNum: 1,
        hasMore: true,
        dataList: []
    }

    componentWillMount() {
        this.handleRefresh();
    }

    getDataList(pageNum) {
        this.setState({ refreshing: true })
        console.log(this.props);

        if (!!this.props.url) {
            http(this.props.url, { pageNum, pageSize: 2, ...this.props.data }).then(({ code, result }) => {
                if (code === 0) {
                    if (pageNum == 1) {
                        this.setState({
                            dataList: result.result,
                            pageNum,
                            hasMore: pageNum < result.totalPage,
                            refreshing: false,
                        })
                    } else {
                        this.setState({
                            dataList: this.state.dataList.concat(result.result) || [],
                            refreshing: false,
                            pageNum: pageNum,
                            hasMore: pageNum < result.totalPage,
                        });
                    }
                }
            })
        }

    }

    handleRefresh = () => {
        const { refreshing } = this.state
        if (!refreshing) {
            this.getDataList(1);
        }
    }

    handleLoadMore = () => {
        const { hasMore, pageNum, refreshing } = this.state
        if (!refreshing && hasMore) {
            this.getDataList(pageNum + 1);
        }
    }

    renderItem = ({ item }) => {
        if (this.props.renderItem) {
            return (
                <View>
                    {this.props.renderItem(item)}
                </View>
            )
        }
    }


    render() {
        const { dataList, refreshing } = this.state
        console.log(dataList);

        return (
            <View>
                <FlatList
                    style={{ backgroundColor: "#FFFFFF" }}
                    data={dataList}
                    extraData={this.state}
                    refreshing={refreshing}
                    onRefresh={this.handleRefresh}
                    onEndReachedThreshold={0.1} //当距离内容比例不足内容0.1比例时触发onEndReached
                    onEndReached={this.handleLoadMore} //上拉加载数据     
                    keyExtractor={(item, index) => index + item} //每行不一样的key
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

