'use strict'
import React from 'react'
import { Text, ListItem, Body, Icon } from 'native-base'

import s from './styles'

export default ({ group, navigate }) => {
  let { name, description, icon } = group
  description = (description.length > 25) ? `${description.slice(0,15)}...` : description

  return (
    <ListItem
      onPress = {
        () => {navigate('GroupTasks', { groupId: group.id })}
      }
    >
    <Icon style={s.icon} name={icon} />
    <Body >
      <Text style={s.mainText}>{name}</Text>
      <Text note style={s.parenthetical} > {description} </Text>
    </Body>
    </ListItem>
  )
}
