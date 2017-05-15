'use strict'
import React from 'react'
import { Fab, Icon } from 'native-base'
import s from './styles'

export default ({goBack}) => (
  <Fab style={s.fab}
    position="bottomLeft"
    onPress={() => {
      goBack()
    }
  }>
  <Icon style={s.icon} name="arrow-back"/>
  </Fab>
)
