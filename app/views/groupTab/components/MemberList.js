'use strict';
import React from 'react';
import { Text, Button, Container, Content, List, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { fetchGroupUsers } from '../../../redux/reducers/users';

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchGroupUsers();
  }

  render() {
    const { allUsers } = this.props;
    return (
      <Container>
        <Content>
          <List>
            {allUsers.length ?
              allUsers.map(user => {
                return (
                  <ListItem key={user.id}>
                    <Text>{user.name}</Text>
                  </ListItem>
                );
              }) : null}
          </List>
        </Content>
      </Container>
    );
  }
}

export default connect(
  state => {
    return {
      allUsers: state.users.groupUsers
    };
  },
  dispatch => {
    return {
      fetchGroupUsers: (groupId = 1) => dispatch(fetchGroupUsers(groupId))
    };
  }
)(UserList);
