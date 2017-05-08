'use strict'
import React from 'react'
import { Text, Button, Container, Content, List, ListItem } from 'native-base'
import { connect } from 'react-redux'

export default class TaskList extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Text>MEMBER NAME</Text>
              <Text>IMAGE</Text>
            </ListItem>
            <ListItem>
              <Text>MEMBER NAME</Text>
              <Text>IMAGE</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}
