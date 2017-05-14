'use strict'
// R/RN components
import React from 'react'
import { Content, Text, Button } from 'native-base'

// styles
import s from './styles'

export default ({ navigate }) => (
  <Content>
    <Button block
      onPress={
        () => navigate('Login')
      }
      style={s.login}

    >
    <Text style={s.text}>{'LOGIN'}</Text>
    </Button>
    <Button
      block
      onPress={
        () => navigate('CreateAccount')
      }
      style={s.signup}
    >
    <Text style={s.text}>{'SIGN UP'}</Text>
    </Button>
  </Content>
)
