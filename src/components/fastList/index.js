import React, { Component } from 'react';
import { View, FlatList, Image, Text, TextInput } from 'react-native';
import { http } from '../../utils'
import PropTypes from 'prop-types';

export default class App extends Component {

    static defaultProps = {
        url: "",
        data: {},
        renderItem: "",
        ListEmptyComponent: <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
        />,
        ListHeaderComponent: null
    }

    static propTypes = {
        url: PropTypes.string.isRequired,
        data: PropTypes.object,
        renderItem: PropTypes.func.isRequired,
        ListEmptyComponent: PropTypes.element,
        ListHeaderComponent: PropTypes.element
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

        if (!!this.props.url) {
            http(this.props.url, { pageNum, pageSize: 10, ...this.props.data }).then(({ code, result }) => {
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

    //下拉刷新
    handleRefresh = () => {
        const { refreshing } = this.state
        if (!refreshing) {
            this.getDataList(1);
        }
    }

    //上拉加载更多
    handleLoadMore = () => {
        const { hasMore, pageNum, refreshing } = this.state
        if (!refreshing && hasMore) {
            this.getDataList(pageNum + 1);
        }
    }

    //返回cell
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
        const { dataList, refreshing } = this.state;
        const { ListEmptyComponent, ListHeaderComponent } = this.props
        console.log(dataList);

        return (
            <View>
                <FlatList
                    style={{ backgroundColor: "#FFFFFF" }}
                    data={dataList}
                    extraData={this.state}
                    refreshing={refreshing}
                    ListEmptyComponent={ListEmptyComponent}
                    ListHeaderComponent={ListHeaderComponent}
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

