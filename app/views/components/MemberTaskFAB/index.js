'use strict'
import React from 'react'
import { Fab, Icon } from 'native-base'
import s from './styles'

export default ({ icon, navigate, location, locationParams }) => (
  <Fab style={s.fab}
    position="topRight"
    onPress={() => {
      navigate(location, locationParams)
    }
  }>
  <Icon style={s.icon} name={icon}/>
  </Fab>
)
