'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorTabBar } from '../navigationConfiguration'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabBar,
  }
}

class TabBarNavigation extends React.Component {

  render(){
    const { dispatch, navigationState } = this.props
    return (
      <NavigatorTabBar
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(TabBarNavigation)
