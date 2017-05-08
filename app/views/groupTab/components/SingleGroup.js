'use strict'
import React from 'react'
import { Text, Button, Container, Content, Title, Header, Body, Tabs, Tab, Icon } from 'native-base'
import { connect } from 'react-redux'
import TaskList from './TaskList'
import MemberList from './MemberList'

class SingleGroup extends React.Component {
  render() {
    const { selectedTask, setBounty } = this.props.allTasks
    return (
      <Container>
        <Content>
          <Header>
            <Body>
              <Title>GROUP NAME</Title>
              <Text>GROUP INFO</Text>
              <Button>
                <Icon name="add-circle" />
                <Text>Create New Task</Text>
              </Button>
            </Body>
          </Header>
          <Tabs>
            <Tab heading="Pending Tasks">
              <TaskList />
            </Tab>
            <Tab heading="Active Tasks">
              <TaskList />
            </Tab>
            <Tab heading="Completed Tasks">
              <TaskList />
            </Tab>
            <Tab heading="Members">
              <MemberList />
            </Tab>
          </Tabs>
          <Text>Current Task: {selectedTask.name}</Text>
          <Text>Task Bounty: {setBounty}</Text>
          <Button onPress={ () => this.props.navigation.dispatch({ type: 'JUMP_TO_TAB', payload: {index: 0} }) }>
            <Text>{'Back to Home'}</Text>
          </Button>
          <Text>Members:</Text>
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
  SingleGroup
)
