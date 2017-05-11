'use strict'
import React from 'react'
import { Text, ListItem, Body, Icon } from 'native-base';

export default ({ name, icon, setViewerGroup, id }) => (
  <ListItem
    onPress={ () => { setViewerGroup(id) } }
  >
    <Icon name='home' />
    <Body>
      <Text>{name}</Text>
    </Body>
  </ListItem>
)
