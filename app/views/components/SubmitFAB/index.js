'use strict'
import React from 'react'
import { Fab, Icon } from 'native-base'
import s from './styles'

export default ({ navigate, location, locationParams, state, submitAction }) => (
  <Fab
    position="bottomRight"
    style = {(s.fab)}
    onPress={() => {
      submitAction(state)
        .then(() => navigate(location, locationParams))
        .catch(console.error)
    }
  }>
  <Icon style={s.icon} name="arrow-forward" />
  </Fab>
)
