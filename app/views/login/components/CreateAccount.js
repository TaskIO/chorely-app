'use strict'
import React from 'react'
import { TouchableOpacity, View, StyleSheet, Dimensions, Platform } from 'react-native'
import { Button, Container, Text, Content, Form, Label, Item, Input } from 'native-base'
import styles from './styles'
import { createAccount } from '../../../redux/reducers/users'
import { connect } from 'react-redux'

class CreateAccount extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        name: '',
        email: '',
        password: ''
      }

      this.handleNameChange = this.handleNameChange.bind(this)
      this.handleEmailChange = this.handleEmailChange.bind(this)
      this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handleNameChange(name) {
      this.setState({
        name
      })
    }

    handleEmailChange(email) {
      this.setState({
        email
      })
    }

    handlePasswordChange(password) {
      this.setState({
        password
      })
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
              <Input onChangeText={this.handleNameChange}/>
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input onChangeText={this.handleEmailChange}/>
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input onChangeText={this.handlePasswordChange}/>
            </Item>
            <Button
            onPress={
              () => {
                this.props.createAccount(this.state)
                .then(navigate('TabBarNavigation'))
                .catch(console.error)
              }
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
  /* -----------------    CONTAINER     ------------------ */

const mapState = state => state

const mapDispatch = { createAccount }

export default connect(mapState, mapDispatch)(CreateAccount)
