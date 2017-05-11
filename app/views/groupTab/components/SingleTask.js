'use strict'
import React from 'react'
import { Container, Content, Text, Input, Body, Button, Header, Title, Card, CardItem } from 'native-base';
import { connect } from 'react-redux'
import SetBounty from './SetBounty'
import ViewBounty from './ViewBounty'

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
    const { selectedTask } = this.props
    let { bountyAmount } = this.state
    const bountyStatus = selectedTask.bounties.some(bounty => {
      bountyAmount = bounty.amount
      return bounty.user_id === 1
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
            : <SetBounty bountyAmount={bountyAmount} changeBounty={this.changeBounty} />
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
      viewerUser: state.users.viewerUser
    }
  }
)(
  SingleTask
)
