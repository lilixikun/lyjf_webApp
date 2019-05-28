import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createReactNavigationReduxMiddleware, createReduxContainer } from "react-navigation-redux-helpers"
import { connect } from "react-redux";
import { Platform, StatusBar } from 'react-native'
import DetailScreen from '../routers/detail'
import MainNavigator from './MainNavigator'
import HotleDetail from '../routers/wanbei/hotel/detail'
import Spalch from '../components/Spalch'

export const rootCom = "spalch";

const rootNavigator = createStackNavigator(
    {
        spalch: {
            screen: Spalch,
            navigationOptions: ({ navigation }) => ({
                header: null //设置页面有无标题
            })
        },
        home: {
            screen: MainNavigator,
            navigationOptions: ({ navigation }) => ({
                header: null //设置页面有无标题
            })
        },
        detail: DetailScreen,
        hotleDetail: HotleDetail
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
            }
        }),
    },
    {
        initialRouteName: "spalch"
    }
)

export const RootNavigator = createAppContainer(rootNavigator);


/**
 * 1. 初始化 react-navigation 与 redux 的中间件
 * 该方法的一个很大的作用是为 reduxifyNavigator 的 key 设置 actionSubscribers (行为订阅者)
 */
export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);

/**
 * 2. 将导航器传递给 reduxifyNavigator 函数
 * 并返回一个将 navigation state 和 dispatch 函数作为 props 的新组件
 * 注意: 要在 createReactNavigationReduxMiddleware 之后执行
 */

const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');
/**
 * State 和 Props 的映射关系
 */
const mapStateToProps = state => ({
    state: state.nav
})

/**
 * 连接 React 组件 与 Redux store
 */
export default connect(mapStateToProps)(AppWithNavigationState);
//export default RootNavigator