'use strict'
import React from 'react'
import { Text, Button, Container, Content, List, ListItem } from 'native-base'
import { connect } from 'react-redux'
import { fetchGroupTasks } from '../../../redux/reducers/tasks'

class TaskList extends React.Component {
  constructor() {
    super()
    this.state = {
      status: 'Pending',
    }
  }
  componentDidMount() {
    this.props.fetchGroupTasks()
  }
  render() {
    const tasks = this.props.allTasks.groupTasks
    return (
      <Container>
        <Content>
          <List>
            {tasks.length ? tasks.map(task => {
              return (
                <ListItem key={task.id}>
                  <Text>{task.description}</Text>
                </ListItem>
              )
            }) : null}
          </List>
        </Content>
      </Container>
    )
  }
}

export default connect(
  state => {
    return {
      allTasks: state.tasks,
    }
  },
  dispatch => {
    return {
      fetchGroupTasks: (groupId = 1) => {
        dispatch(fetchGroupTasks(groupId))
      }
    }
  }
)(
  TaskList
)
