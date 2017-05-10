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
          <TouchableOpacity
          onPress={
            () => navigate('Welcome')
          }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
          <Text>{'Logout'}</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    )
  }
}
