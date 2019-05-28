import { combineReducers } from "redux"
//import { rootCom, RootNavigator } from '../srceens/RootNavigator'
import user from './user'
import pay from './pay'

// //1.指定默认state
// const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

// /**
//  * 2.创建自己的 navigation reducer，
//  */
// const navReducer = (state = navState, action) => {
//     const nextState = RootNavigator.router.getStateForAction(action, state);
//     // 如果`nextState`为null或未定义，只需返回原始`state`
//     return nextState || state;
// };


const index = combineReducers({
    //nav: navReducer,
    user: user,
    pay: pay
})

export default index;