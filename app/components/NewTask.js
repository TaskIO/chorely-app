import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import store from '../store'
import { addSelectedTask } from '../reducers/tasks'

export default class NewTask extends React.Component {
  constructor() {
    super()
    this.state = {
      taskInput: ''
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    const taskInput = this.state.taskInput
    return (
      <View>
        <Text> What task do you want accomplished?</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={taskInput => this.setState({taskInput})}
          value={taskInput}
        />
        <Button title="Add task." onPress={() => {
          store.dispatch(addSelectedTask(taskInput))
        }}/>
        <Button title="Go to Group" onPress={() => navigate('GroupTasks')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
