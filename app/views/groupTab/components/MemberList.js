'use strict'
import React from 'react'
import { Text, Button, Container, Content, Title, Header, Body, Tabs, Tab } from 'native-base'
import { connect } from 'react-redux'

export default class TaskList extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>MEMBER NAME</Text>
          <Text>MEMBER IMAGE</Text>
        </Content>
      </Container>
    )
  }
}
