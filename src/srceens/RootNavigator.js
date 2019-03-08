import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import DetailScreen from '../routers/detail'
import MainNavigator from './MainNavigator'

const RootNavigator = createStackNavigator({
    home: {
        screen: MainNavigator,
        navigationOptions: ({ navigation }) => ({
            header: null  //设置页面有无标题
        })
    },
    detail: {
        screen: DetailScreen,
    }
})

export default createAppContainer(RootNavigator);
