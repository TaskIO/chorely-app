'use strict'
import React from 'react'
import { Fab, Icon } from 'native-base'
import s from './styles'

export default ({navigate}) => (
  <Fab style={s.fab}
    onPress={() => {
      navigate('Profile')
    }
  }>
  <Icon style={s.icon} name="add"/>
  </Fab>
)
