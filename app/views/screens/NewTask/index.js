'use strict'
//  R/RN/NB components
import React from 'react'
import { Image, StatusBar } from 'react-native'
import { Form, Item, Label, Input, InputGroup, Container, Content } from 'native-base'

// additional components
import SubmitFAB from '../../components/SubmitFAB'
import ReturnFAB from '../../components/ReturnFAB'

// styles and background image
import s from './styles'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'

// redux and dispatchers
import { connect } from 'react-redux'
import { createNewTask } from '../../../redux/reducers/tasks'
import { fetchViewer } from '../../../redux/reducers/users'

class NewTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groupId: props.viewerGroup.id,
      creatorId: props.viewerUser.id,
      description: '',
      amount: ''
    }

    this.handleTaskChange = this.handleTaskChange.bind(this)
    this.handleBountyChange = this.handleBountyChange.bind(this)
  }
  handleTaskChange(description) {
    this.setState({
      description
    })
  }
  handleBountyChange(amount) {
    this.setState({
      amount
    })
  }
    render() {
      const parentProps = Object.assign({}, this.state, this.props, {
        handleTaskChange: this.handleTaskChange,
        handleBountyChange: this.handleBountyChange
      })
      let availablePoints = this.props.viewerGroup.userGroups.filter(userGroup => {
        return userGroup.user.id === this.props.viewerUser.id
      })[0].points
      const pendingTasks = this.props.viewerGroup.tasks.filter(task => {
        return task.status === 'Pending'
      })
      pendingTasks.forEach(task => {
        task.bounties.forEach(bounty => {
          if (bounty.user.id === this.props.viewerUser.id) {
            availablePoints -= bounty.amount
          }
        })
      })
      return (
        <Container>
        <Image source={welcomeScreenBg} style={s.imageContainer}>
          <StatusBar hidden={true} />
          <Content contentContainerStyle={s.content}>
            <Form style={s.form}>
              <Item stackedLabel style={s.item}>
                <Label style={s.label}> Task Description </Label>
                <InputGroup>
                  <Input style={s.input} onChangeText={this.handleTaskChange} />
                </InputGroup>
              </Item>
              <Item stackedLabel style={s.item}>
                <Label style={s.label}> Proposed Wage </Label>
                <InputGroup>
                  <Input
                    keyboardType={'numeric'}
                    style={s.input}
                    onChangeText={this.handleBountyChange}
                    value={this.state.amount}
                    placeholder={`0-${availablePoints}`}
                  />
                </InputGroup>
              </Item>
            </Form>
            {
              +this.state.amount <= availablePoints && this.state.amount.length && this.state.description.length && this.state.amount >= 0
              ?
              <SubmitFAB
                submitAction={this.props.createNewTask}
                state={this.state}
                location={'GroupTasks'}
                locationParams={{groupId: this.state.groupId}}
                navigate={this.props.navigation.navigate}
              />
              :
              null
            }
        <ReturnFAB
          goBack={this.props.navigation.goBack}
        />
        </Content>
        </Image>
      </Container>
    )
  }
}
/* -----------------    CONTAINER     ------------------ */

const mapState = state => {
  return {
    viewerGroup: state.groups.viewerGroup,
    viewerUser: state.users.viewerUser
  }
}

const mapDispatch = { createNewTask, fetchViewer }

export default connect(mapState, mapDispatch)(NewTask)
