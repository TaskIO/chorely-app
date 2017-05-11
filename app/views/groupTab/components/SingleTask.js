'use strict'
import React from 'react'
import { Container, Content, Text, Input, Body, Button, Header, Title, Card, CardItem } from 'native-base';
import { connect } from 'react-redux'
import SetBounty from './SetBounty'
import ViewBounty from './ViewBounty'
import { addBountyToTask } from '../../../redux/reducers/tasks'

class SingleTask extends React.Component {
  constructor() {
    super()
    this.state = {
      bountyAmount: ''
    }
    this.changeBounty = this.changeBounty.bind(this)
  }
  changeBounty(bountyAmount) {
    this.setState({
      bountyAmount
    })
  }
  render() {
    const { navigate } = this.props.navigation
    const { selectedTask, addBountyToTask, viewerGroup } = this.props
    let { bountyAmount } = this.state
    const bountyStatus = selectedTask.bounties.some(bounty => {
      if (bounty.user_id === 2) bountyAmount = bounty.amount
      return bounty.user_id === 2
    })
    return (
      <Container>
        <Content>
          <Header searchBar rounded>
            <Body>
              <Title>{selectedTask.description}</Title>
            </Body>
          </Header>
          {bountyStatus
            ? <ViewBounty bountyAmount={bountyAmount} />
            : <SetBounty
              bountyAmount={bountyAmount}
              changeBounty={this.changeBounty}
              addBountyToTask={addBountyToTask}
              viewerGroup={viewerGroup}
              selectedTask={selectedTask}
              navigate={navigate}
              />
          }
        </Content>
      </Container>
    )
  }
}

export default connect(
  state => {
    return {
      selectedTask: state.tasks.selectedTask,
      viewerUser: state.users.viewerUser,
      viewerGroup: state.groups.viewerGroup
    }
  },
  dispatch => {
    return {
      addBountyToTask: (amount, userId, taskId, groupId) => {
        dispatch(addBountyToTask(amount, userId, taskId, groupId))
      }
    }
  }
)(
  SingleTask
)
