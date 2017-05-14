'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { Container, Content, Text, Button, Form, Item, Icon, Input, List, Body, Label, Title, Header } from 'native-base'
import GroupListItem from '../../components/GroupListItem'
import {
  selectGroup,
  createNewGroup,
  fetchGroups,
  addToUserGroups
} from '../../../redux/reducers/groups'
import { setGroupUsers } from '../../../redux/reducers/users'
import { setGroupTasks } from '../../../redux/reducers/users'

class HomeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      groupName: '',
      groupDescription: ''
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.handleGroupNameChange = this.handleGroupNameChange.bind(this)
    this.handleGroupDescriptionChange = this.handleGroupDescriptionChange.bind(
      this
    )
  }

  toggleForm() {
    const formState = this.state.showForm
    this.setState({
      showForm: !formState
    })
  }

  handleGroupNameChange(groupName) {
    this.setState({ groupName })
  }

  handleGroupDescriptionChange(groupDescription) {
    this.setState({ groupDescription })
  }

  render() {
    const formState = this.state.showForm
    const { navigate } = this.props.navigation
    const { addGroup } = this.props
    return (
      <Container>
        <Content>
          <Header>
            <Body>
              <Title>My Groups</Title>
            </Body>
          </Header>
          <List>
            {this.props.groups.map(group => (
              <GroupListItem
                key={group.id}
                group={group}
                navigate={navigate}
                selectGroup={this.props.selectGroup}
              />
            ))}
          </List>
          <Button transparent onPress={this.toggleForm}>
            <Icon name="add-circle" />
            <Text>New Group</Text>
          </Button>
          <Button
            onPress={() => {
              navigate('Profile')
            }}
          >
            <Text>Temp Button to Profile</Text>
          </Button>
          {formState &&
            <Form>
              <Item stackedLabel>
                <Label>Group Name</Label>
                <Input onChangeText={this.handleGroupNameChange} />
              </Item>
              <Item stackedLabel>
                <Label>Group Description</Label>
                <Input onChangeText={this.handleGroupDescriptionChange} />
              </Item>
              <Button
                onPress={() => {
                  addGroup(
                    this.state.groupName,
                    this.state.groupDescription,
                    this.props.viewerUser.id
                  )
                }}
              >
                <Text> Create Group </Text>
              </Button>
            </Form>}
        </Content>
      </Container>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = state => {
  return {
    viewerUser: state.users.viewerUser,
    groups: state.groups.viewerGroups,
    viewerGroup: state.groups.viewerGroup
  }
}

const mapDispatch = dispatch => {
  return {
    selectGroup: id => {
      dispatch(selectGroup(id))
    },
    addGroup: (name, description, userId) => {
      dispatch(createNewGroup(name, description, userId))
    }
  }
}

export default connect(mapState, mapDispatch)(HomeComponent)
