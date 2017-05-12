'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { Navigator } from './navigationConfiguration'

// Redux
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
 return {
  navigationState: state.authenticated
  }
}

class Navigation extends React.Component {
  render(){
    const { navigationState, dispatch } = this.props
    return (
      <Navigator
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
export default connect(mapStateToProps)(Navigation)
