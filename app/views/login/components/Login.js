'use strict'
import React from 'react'
import { TouchableOpacity, View, StyleSheet, Dimensions, Platform } from 'react-native'
import { Button, Container, Text, Content, Form, Label, Item, Input, InputGroup } from 'native-base'
import styles from './styles'
import { fetchViewer } from '../../../redux/reducers/users'
import { connect } from 'react-redux'

class FetchViewer extends React.Component {
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
              <Label>Email</Label>
              <InputGroup borderType="underline" >
                <Input onChangeText={this.handleEmailChange}/>
              </InputGroup>
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <InputGroup borderType="underline" >
                <Input onChangeText={this.handlePasswordChange}/>
              </InputGroup>
            </Item>
            <Button
            onPress={
              () => {
                this.props.fetchViewer(this.state)
                .then(navigate('TabBarNavigation'))
                .catch(console.error)
              }
            }
            >
            <Text>{'Login'}</Text>
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

const mapDispatch = { fetchViewer }

export default connect(mapState, mapDispatch)(FetchViewer)
