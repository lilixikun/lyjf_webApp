import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../routers/wanbei/hotel/index';
import MineScreen from '../routers/user';
import UsedScreen from '../routers/wanbei'

const MainNavigator = createBottomTabNavigator({
    "首页": {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return (
                        <Image source={require("../assets/tabbaricon/homeSelect.png")} style={{
                            width: 25, height: 25
                        }}></Image>
                    )
                } else {
                    return (
                        <Image source={require("../assets/tabbaricon/home.png")} style={{
                            width: 25, height: 25
                        }}></Image>
                    )
                }
            }
        }
    },
    "用呗": {
        screen: UsedScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return (
                        <Image source={require("../assets/tabbaricon/yongbeiSelect.png")} style={{
                            width: 25, height: 25
                        }}></Image>
                    )
                } else {
                    return (
                        <Image source={require("../assets/tabbaricon/yongbei.png")} style={{
                            width: 25, height: 25
                        }}></Image>
                    )
                }
            }
        }
    },
    "我的": {
        screen: MineScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                if (focused) {
                    return (
                        <Image source={require("../assets/tabbaricon/meSelect.png")} style={{
                            width: 25, height: 25
                        }}></Image>
                    )
                } else {
                    return (
                        <Image source={require("../assets/tabbaricon/me.png")} style={{
                            width: 25, height: 25
                        }}></Image>
                    )
                }
            }
        }
    },
},
    {
        tabBarOptions: {
            //当前选中的tab bar的文本颜色和图标颜色
            activeTintColor: '#4BC1D2',
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#000',
            //是否显示tab bar的图标，默认是false
            showIcon: true,
            //showLabel - 是否显示tab bar的文本，默认是true
            showLabel: true,
            //是否将文本转换为大小，默认是true
            upperCaseLabel: false,
            //material design中的波纹颜色(仅支持Android >= 5.0)
            pressColor: '#788493',
            //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
            pressOpacity: 0.8,
            //tab bar的样式
            style: {
                backgroundColor: '#fff',
                paddingBottom: 1,
                borderTopWidth: 0.2,
                paddingTop: 1,
                borderTopColor: '#ccc',
            },
            //tab bar的文本样式
            labelStyle: {
                fontSize: 12,
                margin: 1
            },
            //tab 页指示符的样式 (tab页下面的一条线).
            indicatorStyle: { height: 0 },
        },
        //tab bar的位置, 可选值： 'top' or 'bottom'
        tabBarPosition: 'bottom',
        //是否允许滑动切换tab页
        swipeEnabled: true,
        //是否在切换tab页时使用动画
        animationEnabled: false,
        //是否懒加载
        lazy: true,
        //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'none',

    }
);

export default createAppContainer(MainNavigator);