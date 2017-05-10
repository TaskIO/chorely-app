'use strict'
import React from 'react'
import { Text, Button, Container, Content, List, ListItem, Body } from 'native-base'
import { connect } from 'react-redux'
import { fetchGroupTasks } from '../../../redux/reducers/tasks'

class TaskList extends React.Component {
  constructor() {
    super()
    this.state = {
      status: 'Pending',
    }
    this.toggleStatus = this.toggleStatus.bind(this)
  }
  componentDidMount() {
    this.props.fetchGroupTasks()
  }
  toggleStatus(status) {
    if (status !== this.state.status) this.setState({status})
  }
  render() {
    console.log(this.props.groupTasks)
    const groupTasks = this.props.groupTasks.filter(task => task.status === this.state.status)
    const statuses = ['Pending', 'Active', 'Completed']
    return (
      <Container>
        <Content>
          <Body style={{justifyContent: 'center', flexDirection: 'row'}}>
            {statuses.map(status => {
              return (
                <Button key={status} onPress={() => this.toggleStatus(status)}>
                  <Text>{status}</Text>
                </Button>
              )
            })}
          </Body>
          <List>
            {groupTasks.length ? groupTasks.map(task => {
              return (
                <ListItem key={task.id}>
                  <Text>{task.description}</Text>
                </ListItem>
              )
            }) : <Text>No {this.state.status} Tasks</Text>}
          </List>
        </Content>
      </Container>
    )
  }
}

export default connect(
  state => {
    return {
      groupTasks: state.tasks.groupTasks,
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
