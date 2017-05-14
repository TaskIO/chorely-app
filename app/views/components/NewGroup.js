'use strict'
import React from 'react'
import { Container, Content, Header, Body, Title } from 'native-base'
import { connect } from 'react-redux'

import ChangeGroup from './ChangeGroup'
import TaskForm from './TaskForm'

import { createNewTask } from '../../redux/reducers/tasks'
import { fetchGroup } from '../../redux/reducers/groups'

class NewGroup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groupName: '',
      groupDescription: '',
    }
    this.changeGroupName = this.changeGroupName.bind(this)
    this.changeGroupDescription = this.changeGroupDescription.bind(this)
  }
  changeGroupName(groupName) {
    this.setState({
      groupName
    })
  }
  changeGroupDescription(groupDescription) {
    this.setState({
      groupDescription
    })
  }
  render() {
    const parentProps = Object.assign({}, this.state, this.props, {
      changeGroupName: this.changeGroupName,
      changeGroupDescription: this.changeGroupDescription
    })
    return (
      <Container>
        <Content>
          <GroupForm parentProps={parentProps} />
        </Content>
      </Container>
    );
  }
}
