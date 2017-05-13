'use strict'
import React from 'react'
import { Content, Text, Button } from 'native-base'
import s from './styles'

// Button styles override Text styles
// workaround for the time being
import cloudWhite from '../../../../constants/colors'


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
