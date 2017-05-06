'use strict'
// React
import React from 'react'
import { AppRegistry } from 'react-native'
// Native Base
import {StyleProvider, getTheme} from 'native-base'
import material from './theme/native-base-theme/variables/material'
// Redux
import { Provider } from 'react-redux'
import store from './redux/store'
// Navigation
import TabBarNavigation from './tabs/tabBar/components/TabBarNavigation'
class SampleNavigation extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <StyleProvider style={getTheme(material)}>
          <TabBarNavigation />
        </StyleProvider>
      </Provider>
    )
  }
}

export default SampleNavigation
