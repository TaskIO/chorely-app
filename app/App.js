'use strict'
// React
import React from 'react'
import { AppRegistry } from 'react-native'
// Redux
import { Provider } from 'react-redux'
<<<<<<< HEAD
import store from './redux/store'
// Navigation
import TabBarNavigation from './tabs/tabBar/components/TabBarNavigation'
class SampleNavigation extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    )
  }
}

export default SampleNavigation
