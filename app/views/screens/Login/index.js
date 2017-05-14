'use strict'
//  R/RN/NB components
import React from 'react'
import { Image, StatusBar } from 'react-native'
import { Container, Content, Form, Input, InputGroup, Item, Label } from 'native-base'

// additional components
import SubmitFAB from '../../components/SubmitFAB'

// styles and background image
import s from './styles'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'

// redux and dispatchers
import { connect } from 'react-redux'
import { fetchViewer } from '../../../redux/reducers/users'


class Login extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        email: '',
        password: ''
      }

      this.handleEmailChange = this.handleEmailChange.bind(this)
      this.handlePasswordChange = this.handlePasswordChange.bind(this)
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
      return (
        <Container>
        <Image source={welcomeScreenBg} style={s.imageContainer}>
        <StatusBar hidden={true} />
          <Content contentContainerStyle={s.content} >
            <Form style={s.form}>
              <Item stackedLabel style={s.item}>
                <Label style={s.label}> Email </Label>
                <InputGroup >
                  <Input
                    style={s.input}
                    onChangeText={this.handleEmailChange}
                  />
                </InputGroup>
              </Item>
              <Item stackedLabel style={s.item}>
                <Label style={s.label}> Password </Label>
                <InputGroup >
                  <Input
                    style={s.input}
                    secureTextEntry={true}
                    onChangeText={this.handlePasswordChange}
                  />
                </InputGroup>
              </Item>
              <SubmitFAB
                submitAction={this.props.fetchViewer}
                state={this.state}
                location={'Home'}
                locationParams={{}}
                navigate={this.props.navigation.navigate}
              />
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
