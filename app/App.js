import React from 'react';
import { StackNavigator } from 'react-navigation'
import Home from './components/Home'
import Group from './components/Group'

const App = StackNavigator({
  Home: {screen: Home},
  // NewChore: {screen: NewChore},
  Group: {screen: Group}
})

export default App
