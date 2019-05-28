
/**
 * 创建store
 */
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { middleware } from '../srceens/RootNavigator'
import reducers from '../reducers';

const middlewares = [
    middleware,
    thunk
];
/** * 创建store */
export default createStore(reducers, applyMiddleware(...middlewares));