'use strict'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import store from '../../../redux/store'
import { addSelectedTask } from '../../../redux/reducers/tasks'

export default class TaskTabScreenOne extends React.Component {
  constructor() {
    super()
    this.state = {
      taskInput: ''
    }
  }

  render() {
    const { navigate, dispatch } = this.props.navigation;
    const taskInput = this.state.taskInput
    return (
      <View>
        <Text> What task do you want accomplished?</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={taskInput => this.setState({taskInput})}
          value={taskInput}
        />
        <TouchableOpacity
          onPress={ () => {
            store.dispatch(addSelectedTask({name:taskInput}))
            navigate('TaskTabScreenTwo')
          }}
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow'
          }}>
          <Text>{'Add Task'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
