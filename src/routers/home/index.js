import React, { Component } from 'react';
import { View, Text } from 'react-native'
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';
import { color } from '../../utils'
import Play from './play'
import City from './city'
import Travel from './travel'
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
                <Play tabLabel="这好玩" {...this.props} />
                <City tabLabel="那座城" {...this.props} />
                <Travel tabLabel="一键启程" {...this.props} />

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