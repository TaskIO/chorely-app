'use strict'
import React from 'react'
import { Text, Button, Container, Content, Title, Header, Body, Tabs, Tab } from 'native-base'
import { connect } from 'react-redux'

class SingleGroup extends React.Component {
  render() {
    const { selectedTask, setBounty } = this.props.allTasks
    return (
      <Container>
        <Content>
          <Header>
            <Body>
              <Title>GROUP NAME</Title>
            </Body>
          </Header>
          <Tabs>
            <Tab heading="Pending Tasks">
            </Tab>
            <Tab heading="Active Tasks">
            </Tab>
            <Tab heading="Completed Tasks">
            </Tab>
            <Tab heading="Members">
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
