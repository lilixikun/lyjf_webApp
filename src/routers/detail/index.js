
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Button, View } from 'react-native';

//设置统一导航栏界面 主要用于详情有标题和操作栏
export default class Home extends Component {

    static propTypes = {}
    static defaultProps = {
        title: "酒店详情"
    }

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            //title: params.title ? params.title : "酒店",
            headerTitleStyle: { flex: 2, textAlign: 'center' },
            headerRight: (
                <View style={{ flexDirection: "row" }}>
                    <Button onPress={navigation.getParam('increaseCount')}
                        title="分享"
                        color="#841584"
                    />
                    <Button
                        title="收藏"
                        color="red"
                    />
                </View>
            ),
        };
    };

    state = {
        count: 0,
    };

    componentDidMount() {
        console.log(this.props);
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
        this.props.navigation.setParams({ title: "酒店详情" });
    }


    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };


    render() {

        return (
            <View {...this.props} style={{ flex: 1 }}>
                <Text>Count: {this.state.count}</Text>
                {this.props.children}
            </View>
        );
    }
}

