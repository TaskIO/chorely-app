'use strict'
import React from 'react'
import { Grid, Col, Content, Icon, Text } from 'native-base'
import s from './styles'

export default () => (
  <Grid style={s.splash}>
  <Col style={s.leftCol}>
    <Icon style={s.icon} name={selectIcon()}/>
  </Col>
  <Col style={s.rightCol}>
    <Text style={s.text}>Welcome to Chorely</Text>
  </Col>
  </Grid>
)

const selectIcon = () => {
  const icons = ['home', 'paper','cart', 'bulb']
  return icons[Math.floor(Math.random() * icons.length)]
}
