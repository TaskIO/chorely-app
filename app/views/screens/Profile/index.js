'use strict'
import React from 'react'
import { Container, Content, Text, Button, Form, Item, Icon, Input, List, ListItem, Body, Label, Title, Header } from 'native-base';
import { TouchableOpacity } from 'react-native'

export default class Profile extends React.Component {
  render() {
    const { navigate, dispatch } = this.props.navigation
    return (
      <Container>
        <Content>
          <Text>Profile page!</Text>
          <Button
          onPress={
            () => navigate('Home')
          }>
          <Text>{'Logout'}</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
