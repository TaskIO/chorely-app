'use strict'
import React from 'react'
import { Text, Input, Button, Container, Content, Header, Body, Title, Form, Item, Label, ListItem, Radio } from 'native-base'
import store from '../../../redux/store'
import { addSelectedTask } from '../../../redux/reducers/tasks'
import { connect } from 'react-redux'
import ChangeGroup from './ChangeGroup'
import TaskForm from './TaskForm'

class NewTask extends React.Component {
  constructor() {
    super()
    this.state = {
      taskInput: '',
      group: {},
      groupList: false
    }
    this.changeTaskInput = this.changeTaskInput.bind(this)
    this.changeGroup = this.changeGroup.bind(this)
    this.toggleGroupList = this.toggleGroupList.bind(this)
  }
  componentDidMount() {
    this.setState({
      group: this.props.viewerGroup
    })
  }
  changeTaskInput(taskInput) {
    this.setState({
      taskInput
    })
  }
  changeGroup(group) {
    this.setState({
      group,
      groupList: false
    })
  }
  toggleGroupList() {
    this.setState({
      groupList: !this.state.groupList
    })
  }
  render() {
    const parentProps = Object.assign({}, this.state, this.props, {
      changeGroup: this.changeGroup,
      toggleGroupList: this.toggleGroupList,
      changeTaskInput: this.changeTaskInput
    })
    const { navigate, dispatch } = this.props.navigation;
    const { taskInput, group, groupList } = this.state
    const viewerGroups = this.props.viewerGroups
    return (
      <Container>
        <Content>
          <Header style={{marginBottom: 10}}>
            <Body>
              <Title>New Task - {this.state.group.name}</Title>
            </Body>
          </Header>
          <ChangeGroup parentProps={parentProps} />
          <TaskForm parentProps={parentProps} />
        </Content>
      </Container>
    );
  }
}

export default connect(
  state => {
    return {
      viewerGroups: state.groups.viewerGroups,
      viewerGroup: state.groups.viewerGroup
    }
  },
  dispatch => {
    return {

    }
  }
)(
  NewTask
)
