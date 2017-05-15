'use strict'
import React from 'react'
import { Fab, Icon } from 'native-base'
import s from './styles'

export default ({navigate, location}) => (
  <Fab style={s.fab}
    position="bottomLeft"
    onPress={() => {
      navigate(location)
    }
    }>
    <Icon style={s.icon} name="arrow-back"/>
  </Fab>
)
