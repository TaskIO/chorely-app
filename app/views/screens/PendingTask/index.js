'use strict'
//  R/RN/NB components
import React from 'react'
import { Image, StatusBar } from 'react-native'
import { Container, Content, Grid, Col, Text, Input, Item, Label, InputGroup, Form, List, ListItem, Icon, Right, Body } from 'native-base'

// additional components
import ReturnFAB from '../../components/ReturnFAB'
import SubmitFAB from '../../components/SubmitFAB'

// styles and background image
import s from './styles'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'

// redux and dispatchers
import { connect } from 'react-redux'
import { addBountyToTask } from '../../../redux/reducers/tasks'

class PendingTask extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: props.viewerUser.id,
      taskId: props.task.id,
      amount: ''
    }

    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.submittedBounty = this.submittedBounty.bind(this)
  }

  handleAmountChange(amount) {
    this.setState({
      amount: amount
    })
  }

  submittedBounty(bountiesArr) {
    return bountiesArr.some(
      bounty => bounty.user.id === this.props.viewerUser.id
    )
  }

  render() {
    const task = this.props.task
    const bountySubmitted = this.submittedBounty(task.bounties)
    const viewerGroup = this.props.viewerGroup
    const userGroupInfo = this.props.viewerGroup.userGroups.filter(userGroup => {
      return userGroup.user.id === this.props.viewerUser.id
    })
    let availablePoints = this.props.viewerGroup.userGroups.filter(userGroup => {
      return userGroup.user.id === this.props.viewerUser.id
    })[0].points
    const pendingTasks = this.props.viewerGroup.tasks.filter(pendingTask => {
      return pendingTask.status === 'Pending'
    })
    pendingTasks.forEach(pendingTask => {
      pendingTask.bounties.forEach(bounty => {
        if (bounty.user.id === this.props.viewerUser.id) {
          availablePoints -= bounty.amount
        }
      })
    })
    if (availablePoints > 100) availablePoints = 100
    return (
      <Container>
        <Image source={welcomeScreenBg} style={s.imageContainer}>
          <StatusBar hidden={true} />
          <Content contentContainerStyle={s.content}>
            {!bountySubmitted
              ? <Form style={s.form}>
                  <Item stackedLabel style={s.item}>
                    <Label style={s.label}>
                      {' '}
                      {`What do you believe is a fair wage for ${task.description}?`}
                      {' '}
                    </Label>
                    <InputGroup>
                      <Input
                        keyboardType={'numeric'}
                        placeholder={'0-100'}
                        style={s.input}
                        onChangeText={this.handleAmountChange}
                      />
                    </InputGroup>
                  </Item>
                  <Text style={s.parenthetical}>(Submit below)</Text>
                </Form>
              : <Grid style={s.grid}>
                  <Col style={s.column}>
                    <Text
                      style={s.mainText}
                    >{`${task.description} will be assigned when additional bounties are submitted.`}</Text>
                    <List>
                      {viewerGroup.users.map(user => {
                        const bountyStatus = task.bounties.some(bounty => {
                          return bounty.user.id === user.id
                        })
                        return (
                          <ListItem key={user.id}>
                            <Icon name={bountyStatus ? 'checkmark' : 'close'} />
                            <Text style={s.member}>{user.name}</Text>
                          </ListItem>
                        )
                      })}
                    </List>
                  </Col>
                </Grid>}
            <ReturnFAB goBack={this.props.navigation.goBack} />
            {!bountySubmitted &&
              <SubmitFAB
                submitAction={this.props.addBountyToTask}
                state={this.state}
                location={'GroupTasks'}
                locationParams={{ groupId: this.props.viewerGroup.id }}
                navigate={this.props.navigation.navigate}
              />}
          </Content>
        </Image>
      </Container>
    )
  }
}

const mapState = state => {
  return {
    viewerUser: state.users.viewerUser,
    viewerGroup: state.groups.viewerGroup,
    task: state.tasks.selectedTask
  }
}

const mapDispatch = { addBountyToTask }

export default connect(mapState, mapDispatch)(PendingTask)
