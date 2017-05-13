'use strict'
import React from 'react'
import { Image, StatusBar } from 'react-native'
import { Button, Container, Text, Content, Form, Label, Item, Input, InputGroup, Fab, Icon } from 'native-base'
import { fetchViewer } from '../../../redux/reducers/users'
import { connect } from 'react-redux'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'
import s from './styles'

class Login extends React.Component {
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
      const { navigate } = this.props.navigation
      return (
        <Container>
        <Image source={welcomeScreenBg} style={s.imageContainer}>
        <StatusBar hidden={true}/>
          <Content contentContainerStyle={s.content} >
            <Form style={s.form}>
              <Item
                stackedLabel
                style={s.item}
              >
              <Label style={s.label}>
              Email
              </Label>
              <InputGroup  >
              <Input
                style={s.input}
                onChangeText={this.handleEmailChange}
              />
              </InputGroup>
              </Item>
              <Item stackedLabel style={s.item}>
              <Label style={s.label}>
              Password
              </Label>
              <InputGroup  >
              <Input
                style={s.input}
                onChangeText={this.handlePasswordChange}
              />
              </InputGroup>
              </Item>
              <Fab
                style={s.fab}
                onPress={
                  () => {
                    this.props.fetchViewer(this.state)
                    .then(navigate('Home'))
                    .catch(console.error)
                  }
                }
              >
              <Icon style={s.icon} name="arrow-forward"/>
              </Fab>
            </Form>
          </Content>
        </Image>
        </Container>
      )
    }
  }
  /* -----------------    CONTAINER     ------------------ */

const mapState = state => state

const mapDispatch = { fetchViewer }

export default connect(mapState, mapDispatch)(Login)
// <Button
//               block
//               style={s.button}
//
//               }
//               >
//               <Text>{'Login'}</Text>
//               </Button>
