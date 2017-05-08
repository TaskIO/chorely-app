'use strict'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'


class GroupTabScreenOne extends React.Component {
  render(){
    const { selectedTask, setBounty } = this.props.allTasks
    return(
      <View style={{
        flex:1,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>Current Task: {selectedTask.name}</Text>
        <Text>Task Bounty: {setBounty}</Text>
        <TouchableOpacity
          // Refactor to not dispatch inline
          onPress={ () => this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:0} }) }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'blue',
            marginTop:20
          }}>
          <Text>{'Back to Home'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(
  state => {
    return {
      allTasks: state.tasks
    }
  }
)(
  GroupTabScreenOne
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'khaki',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
