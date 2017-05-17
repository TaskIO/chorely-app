'use strict'
import React from 'react'
import { Text, ListItem, Body } from 'native-base'
import s from './styles'

export default ({ member, navigate }) => {
  return (
    <ListItem>
      <Body >
        <Text style={s.mainText}>{member.name}</Text>
      <Text note style={s.parenthetical} > Points: {member.points} </Text>
    </Body>
    </ListItem>
  )
}
