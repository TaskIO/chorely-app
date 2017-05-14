'use strict'
import React from 'react'
import { Image, StatusBar } from 'react-native'
import { Form, Item, Label, Input, InputGroup, Container, Content, Header, Body, Title } from 'native-base'
import { connect } from 'react-redux'

// styles and background image
import s from './styles'
import SubmitFAB from '../../components/SubmitFAB'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'

import { createNewTask } from '../../../redux/reducers/tasks'
import { fetchViewer } from '../../../redux/reducers/users'

class NewTask extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        groupId: props.viewerGroup.id,
        creatorId: props.viewerUser.id,
        description: '',
        amount: '',
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
      return (
        <Container>
        <Image source={welcomeScreenBg} style={s.imageContainer}>
        <StatusBar hidden={true} />
          <Content contentContainerStyle={s.content} >
          <Form style={s.form}>
              <Item stackedLabel style={s.item}>
                <Label style={s.label}> Task Description </Label>
                <InputGroup >
                  <Input
                    style={s.input}
                    onChangeText={this.handleTaskChange}
                  />
                </InputGroup>
              </Item>
              <Item stackedLabel style={s.item}>
                <Label style={s.label}> Proposed Wage </Label>
                <InputGroup >
                  <Input
                    style={s.input}
                    onChangeText={this.handleBountyChange}
                  />
                </InputGroup>
              </Item>
              <SubmitFAB
                submitAction={this.props.createNewTask}
                state={this.state}
                location={'GroupTasks'}
                locationParams={{groupId: this.state.groupId}}
                navigate={this.props.navigation.navigate}
              />
            </Form>
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
