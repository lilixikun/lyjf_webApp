import React, { Component } from 'react';
import { View, Text } from 'react-native'
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';
import { color } from '../../utils'
import HotelPage from './hotel'
import ShopPage from './shop'
import EatPage from './eat'
export default class Index extends Component {

    renderScrollableTab() {
        return (
            <ScrollableTabView
                initialPage={0}
                //可自定义renderTabBar 
                renderTabBar={() => <ScrollableTabBar />}
                style={{ borderBottomColor: "red" }}
                tabBarBackgroundColor='#fff'
                tabBarActiveTextColor={color.bold}
                tabBarInactiveTextColor={color.color6B2}
                tabBarTextStyle={{ fontSize: 17 }}
                tabBarUnderlineStyle={{ backgroundColor: color.theme, height: 1 }}  //设置下划线样式
            >
                <HotelPage tabLabel="酒店" {...this.props} />
                <EatPage tabLabel="餐厅" />
                <ShopPage tabLabel="商城" />

            </ScrollableTabView>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderScrollableTab()}
            </View>
        )
    }
}