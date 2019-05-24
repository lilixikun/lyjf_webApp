import React, { Component } from 'react';
import { View, BackHandler, Platform, ToastAndroid } from 'react-native'
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';
import { color } from '../../utils'
import Play from './play'
import City from './city'
import Travel from './travel'
export default class Index extends Component {

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }


    onBackAndroid = () => {
        const routers = this.props.navigation.router;
        if (routers && routers.length > 1) {
            nav.pop();
            return true;
        } else {
            let time = new Date();
            this.lastBackPressed = this.thisBackPressed;
            this.thisBackPressed = time.getTime();
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= this.thisBackPressed) {
                //最近2秒内按过back键，可以退出应用。
                return false;
            }
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            return true;
        }
    };

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
                <Play tabLabel="这好玩" />
                <City tabLabel="那座城" />
                <Travel tabLabel="一键启程" />

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