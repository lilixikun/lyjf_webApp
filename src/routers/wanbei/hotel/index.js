import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { findHotelList } from '../../model/hotel'

export default class App extends Component {

    state = {
        dataList: []
    }

    componentWillMount() {
        findHotelList({ pageNum: 1, pageSize: 10 }).then(({ code, result }) => {
            if (code === 0) {
                this.setState({
                    dataList: result.result
                })
            }
        })
    }

    render() {
        const { dataList } = this.state
        return (
            <View>
                {
                    dataList.map(item => (
                        <Text onPress={() => this.props.navigation.push('detail', { id: item.id })} key={item.id}>
                            {item.hotelName}
                        </Text>
                    ))
                }

            </View>
        )
    }
}