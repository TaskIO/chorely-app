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

// index
// <Grid style={s.splash}>
//   <Col style={s.leftCol}>
//     <Icon style={s.icon} name={selectIcon()}/>
//   </Col>
//   <Col style={s.rightCol}>
//     <Text style={s.text}>Welcome to Chorely</Text>
//   </Col>
//   </Grid>
