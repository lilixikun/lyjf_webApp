import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform, StatusBar } from 'react-native'
import DetailScreen from '../routers/detail'
import MainNavigator from './MainNavigator'
import HotleDetail from '../routers/wanbei/hotel/detail'
import Spalch from '../components/Spalch'

const RootNavigator = createStackNavigator(
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
        // transitionConfig: () => ({
        //     screenInterpolator: CardStackStyleInterpolator.forHorizontal,
        // }),
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

export default createAppContainer(RootNavigator);
