'use strict'
import React from 'react'
import { Text, ListItem, Body, Icon } from 'native-base'

export default ({ group, navigate, selectGroup }) => (
  <ListItem
    onPress={ () => {
      selectGroup(group)
      navigate('Group')
      }
    }
  >
    <Icon name='home' />
    <Body>
      <Text>{group.name}</Text>
    </Body>
  </ListItem>
)
