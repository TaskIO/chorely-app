import React from 'react'
import { StyleSheet, View, Text, Button, ListView } from 'react-native'
import { connect } from 'react-redux'

class GroupTasks extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Group page!!</Text>
        <Text>Current Task: {this.props.allTasks.selectedTask}</Text>
        <Text>Task amount: {this.props.allTasks.setBounty}</Text>
        {/* <ListView>Tasks</ListView> */}
        <Button title="Back to Home" onPress={() => navigate('Home')} />
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
  GroupTasks
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'khaki',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
