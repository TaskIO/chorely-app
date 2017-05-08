'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorLogin } from '../navigationConfiguration'

// Redux
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
 return {
  navigationState: state.authenticated
  }
}

class LoginNavigation extends React.Component {
  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorLogin
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}
export default connect(mapStateToProps)(LoginNavigation)
