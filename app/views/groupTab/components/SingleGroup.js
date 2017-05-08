'use strict'
import React from 'react'
import { Text, Button, Container, Content, Title } from 'native-base'
import { connect } from 'react-redux'

class SingleGroup extends React.Component {
  render() {
    const { selectedTask, setBounty } = this.props.allTasks
    return (
      <Container>
        <Content>
          <Text>GROUP NAME</Text>
          <Title>GROUP NAME</Title>
          <Text>Current Task: {selectedTask.name}</Text>
          <Text>Task Bounty: {setBounty}</Text>
          <Button onPress={ () => this.props.navigation.dispatch({ type: 'JUMP_TO_TAB', payload: {index: 0} }) }>
            <Text>{'Back to Home'}</Text>
          </Button>
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
