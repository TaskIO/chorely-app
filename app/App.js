import React from 'react';
import { StackNavigator } from 'react-navigation'
import Home from './components/Home'
import Group from './components/Group'
import NewTask from './components/NewTask'

const App = StackNavigator({
  NewTask: {screen: NewTask},
  Home: {screen: Home},
  Group: {screen: Group}
})

export default App
