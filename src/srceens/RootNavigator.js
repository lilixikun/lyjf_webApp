import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import DetailScreen from '../routers/detail'
import MainNavigator from './MainNavigator'
import HotleDetail from '../routers/wanbei/hotel/detail'

const RootNavigator = createStackNavigator(
    {
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
        initialRouteName: "home"
    }
)

export default createAppContainer(RootNavigator);
