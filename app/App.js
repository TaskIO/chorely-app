import React from 'react';
import { StackNavigator } from 'react-navigation'
import Home from './components/Home'
import GroupTasks from './components/GroupTasks'
import NewTask from './components/NewTask'
import SingleTask from './components/SingleTask'

const App = StackNavigator({
  NewTask: {screen: NewTask},
  Home: {screen: Home},
  GroupTasks: {screen: GroupTasks},
  SingleTask: {screen: SingleTask}
})

export default App
