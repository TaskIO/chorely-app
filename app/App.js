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
import LoginNavigation from './views/login/components/LoginNavigation'
class SampleNavigation extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <StyleProvider style={getTheme(material)}>
          <LoginNavigation />
        </StyleProvider>
      </Provider>
    )
  }
}

export default SampleNavigation
