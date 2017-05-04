import React from 'react';
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/Home'
import GroupTasks from './components/GroupTasks'
import NewTask from './components/NewTask'
import SingleTask from './components/SingleTask'

const App = StackNavigator({
  Home: {screen: Home},
  NewTask: {screen: NewTask},
  GroupTasks: {screen: GroupTasks},
  SingleTask: {screen: SingleTask}
})

class AppContainer extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default AppContainer
