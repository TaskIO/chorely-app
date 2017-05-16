'use strict'
import React from 'react'
import { Text, ListItem, Body, Left, Thumbnail } from 'native-base'
import s from './styles'

export default ({ member, navigate, userGroups }) => {
  const userGroupInfo = userGroups.filter(userGroup => {
    return userGroup.user.id === member.id
  })
  return (
    <ListItem>
      <Thumbnail source={member.image === 'default.png' ? require('../../../theme/img/default.png') : member.image} />
      <Body >
        <Text style={s.mainText}>{member.name}</Text>
        <Text note style={s.parenthetical} > Points: {userGroupInfo[0].points} </Text>
      </Body>
    </ListItem>
  )
}

