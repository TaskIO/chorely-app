'use strict'
import React from 'react'
import { Fab, Icon } from 'native-base'
import s from './styles'

export default ({navigate, signInAction, state}) => (
  <Fab style={s.fab}
    onPress={() => {
      signInAction(state)
      .then(navigate('Home'))
      .catch(console.error)
    }
  }>
  <Icon style={s.icon} name="arrow-forward"/>
  </Fab>
)
