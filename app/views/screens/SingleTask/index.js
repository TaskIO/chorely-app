'use strict'
import React from 'react'
import { Container, Content, Body, Header, Title } from 'native-base';
import { connect } from 'react-redux'
import SetBounty from '../components/SetBounty'
import ViewBounty from '../components/ViewBounty'
import CompleteBounty from '../components/CompleteBounty'
import { addBountyToTask, taskStatusComplete } from '../../redux/reducers/tasks'

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
    const { selectedTask, setBountyToTask, viewerGroup, viewerUser, completeTask } = this.props
    let { bountyAmount } = this.state
    let previousBountyAmount = 0
    const bountyStatus = selectedTask.bounties && selectedTask.bounties.some(bounty => {
      return bounty.user.id === viewerUser.id
    })
    selectedTask.bounties && selectedTask.bounties.forEach(bounty => {
      if (bounty.amount > previousBountyAmount) previousBountyAmount = bounty.amount
      if (bounty.user.id === viewerUser.id) bountyAmount = bounty.amount
    })
    return (
      <Container>
        <Content>
          <Header searchBar rounded>
              <Body>
                <Title>{selectedTask.description}</Title>
              </Body>
            </Header>
          {selectedTask.status === 'Pending'
          ?
          <Content>
            {bountyStatus
            ? <ViewBounty bountyAmount={bountyAmount} />
            : <SetBounty
                bountyAmount={bountyAmount}
                changeBounty={this.changeBounty}
                setBountyToTask={setBountyToTask}
                viewerGroup={viewerGroup}
                selectedTask={selectedTask}
                navigate={navigate}
                viewerUser={viewerUser}
                />
            }
          </Content>
          :
          <CompleteBounty
            bountyAmount={previousBountyAmount}
            selectedTask={selectedTask}
            viewerUser={viewerUser}
            navigate={navigate}
            viewerGroup={viewerGroup}
            completeTask={completeTask}
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
      setBountyToTask: (amount, userId, taskId, groupId) => {
        return dispatch(addBountyToTask(amount, userId, taskId, groupId))
      },
      completeTask: taskId => {
        return dispatch(taskStatusComplete(taskId))
      }
    }
  }
)(
  SingleTask
)
