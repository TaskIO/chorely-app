import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import store from '../store';
import { connect } from 'react-redux'
import { addSelectedTask } from '../reducers/tasks';
import NewBounty from './NewBounty';

class NewTask extends React.Component {
  constructor() {
    super();
    this.state = {
      taskInput: ''
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    const taskInput = this.state.taskInput;
    console.log(this.state);
    return (
      <View>
        {this.props.allTasks.selectedTask
          ? <NewBounty />
          : <View>
            <Text> What task do you want accomplished?</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={taskInput => this.setState({ taskInput })}
              value={taskInput}
            />
            <Button
              title="Add task."
              onPress={() => {
                store.dispatch(addSelectedTask(taskInput));
              }}
            />
          </View>}
        <Button title="Go to Group" onPress={() => navigate('GroupTasks')} />
      </View>
    );
  }
}

export default connect(
  state => {
    return {
      allTasks: state.tasks
    }
  }
)(
  NewTask
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
