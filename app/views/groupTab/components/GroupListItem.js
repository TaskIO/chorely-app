'use strict'
import React from 'react'
import { Text, ListItem, Body, Icon } from 'native-base';

export default ({ selectGroup, group }) => (
  <ListItem
    onPress={ () => { selectGroup(group) } }
  >
    <Icon name='home' />
    <Body>
      <Text>{group.name}</Text>
    </Body>
  </ListItem>
)
