'use strict'
import React from 'react'
import { Text, Button, Container, Content, Title, Header, Body, Tabs, Tab } from 'native-base'
import { connect } from 'react-redux'

class TaskList extends React.Component {
  render() {
    const { selectedTask, setBounty } = this.props.allTasks
    return (
      <Container>
        <Content>
          <Text>TASK NAME</Text>
          <Text></Text>
        </Content>
      </Container>
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
  TaskList
)
