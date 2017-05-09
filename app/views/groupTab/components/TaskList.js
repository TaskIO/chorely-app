'use strict'
import React from 'react'
import { Text, Button, Container, Content, List, ListItem } from 'native-base'
import { connect } from 'react-redux'

class TaskList extends React.Component {
  constructor() {
    super()
    this.state = {
      status: 'Pending'
    }
  }
  render() {
    const { selectedTask, setBounty } = this.props.allTasks
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Text>TASK NAME</Text>
              <Text>DATE</Text>
            </ListItem>
            <ListItem>
              <Text>TASK NAME</Text>
              <Text>DATE</Text>
            </ListItem>
          </List>
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
