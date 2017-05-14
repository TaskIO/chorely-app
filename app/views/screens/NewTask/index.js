'use strict'
import React from 'react'
import { Container, Content, Header, Body, Title } from 'native-base'
import { connect } from 'react-redux'

import ChangeGroup from '../../components/ChangeGroup'
import TaskForm from '../../components/TaskForm'

import { createNewTask } from '../../../redux/reducers/tasks'
import { selectGroup } from '../../../redux/reducers/groups'
import { fetchViewer } from '../../../redux/reducers/users'

class NewTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taskInput: '',
      bountyInput: '',
      group: props.viewerGroup,
      groupList: false
    }
    this.changeTaskInput = this.changeTaskInput.bind(this)
    this.changeBountyInput = this.changeBountyInput.bind(this)
    this.changeGroup = this.changeGroup.bind(this)
    this.toggleGroupList = this.toggleGroupList.bind(this)
  }
  changeTaskInput(taskInput) {
    this.setState({
      taskInput
    })
  }
  changeBountyInput(bountyInput) {
    this.setState({
      bountyInput
    })
  }
  changeGroup(group) {
    this.props.selectGroup(group)
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
      changeTaskInput: this.changeTaskInput,
      changeBountyInput: this.changeBountyInput
    })
    return (
      <Container>
        <Content>
          <Header style={{marginBottom: 10}}>
            <Body>
              <Title>New Task - {this.state.group.name}</Title>
            </Body>
          </Header>
          <ChangeGroup parentProps={parentProps} />
          {this.state.group.id ? <TaskForm parentProps={parentProps} /> : null}
        </Content>
      </Container>
    );
  }
}

export default connect(
  state => {
    return {
      viewerGroups: state.groups.viewerGroups,
      viewerGroup: state.groups.viewerGroup,
      viewerUser: state.users.viewerUser
    }
  },
  dispatch => {
    return {
      selectGroup: group => {
        dispatch(selectGroup(group))
      },
      createNewTask: (description, groupId, creatorId, amount) => {
        return dispatch(createNewTask(description, groupId, creatorId, amount))
      },
      fetchViewer: user => {
        dispatch(fetchViewer(user))
      }
    }
  }
)(
  NewTask
)
