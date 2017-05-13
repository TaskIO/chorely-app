'use strict'
import React from 'react'
import { Content, Text, Button } from 'native-base'
import s from './styles'

export default ({ navigate }) => (
  <Content>
    <Button block
      onPress={
        () => navigate('Login')
      }
    >
    <Text style={s.text}>{'LOGIN'}</Text>
    </Button>
    <Button
      block outline bordered
      onPress={
        () => navigate('CreateAccount')
      }
      style={s.signup}
    >
    <Text style={s.text}>{'SIGN UP'}</Text>
    </Button>
  </Content>
)
