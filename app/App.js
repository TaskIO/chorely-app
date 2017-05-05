'use strict'
// React
import React from 'react'
import { AppRegistry } from 'react-native'
// Redux
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/Home'
import GroupTasks from './components/GroupTasks'
import NewTask from './components/NewTask'
import SingleTask from './components/SingleTask'
import NewBounty from './components/NewBounty'

const App = StackNavigator({
  Home: {screen: Home},
  NewTask: {screen: NewTask},
  GroupTasks: {screen: GroupTasks},
  SingleTask: {screen: SingleTask},
  NewBounty: {screen: NewBounty}
})

class AppContainer extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <TabBarNavigation />
      </Provider>
    )
  }
}

export default SampleNavigation
