
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import AppNavigator from './src/srceens/RootNavigator'
import store from './src/store'


export default class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

