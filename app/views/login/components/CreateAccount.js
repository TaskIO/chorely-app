'use strict'
import React from 'react'
import { TouchableOpacity, View, StyleSheet, Dimensions, Platform  } from 'react-native'
import { Button, Container, Text, Content, Form, Label, Item, Input } from 'native-base'
import styles from './styles'

export default class CreateAccount extends React.Component {
  constructor(props){
    super(props)

  }
  render() {
    const { navigate, dispatch } = this.props.navigation
    return (
      <Container>
        <Content >
          <View style={styles.formContainer}>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          <Button
            onPress={
              () => navigate('TabBarNavigation')
            }
            >
            <Text>{'Create Account'}</Text>
            </Button>
          </Form>
          </View>
        </Content>
      </Container>
    )
  }
}






