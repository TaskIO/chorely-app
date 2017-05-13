'use strict'
import React from 'react'
import { Text, Button, Container, Content, List, ListItem } from 'native-base'
import { connect } from 'react-redux'
import { fetchGroupUsers } from '../../../redux/reducers/users'

class UserList extends React.Component {
  render() {
    const { viewAllGroupMembers } = this.props
    return (
      <Container>
        <Content>
          <List>
            {viewAllGroupMembers.map(user => {
              return (
                <ListItem key={user.id}>
                  <Text>{user.name}</Text>
                </ListItem>
              )
            })}
          </List>
        </Content>
      </Container>
    )
  }
}

export default connect(
  state => {
    return {
      viewAllGroupMembers: state.users.groupUsers,
      viewerGroup: state.groups.viewerGroup
    }
  },
  dispatch => {
    return {
      fetchGroupUsers: (groupId) => dispatch(fetchGroupUsers(groupId))
    }
  }
)(UserList)
