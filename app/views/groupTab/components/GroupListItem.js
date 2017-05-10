'use strict'
import React from 'react'
import { Text, ListItem, Body, Icon } from 'native-base';

export default ({ name, icon }) => (
  <ListItem>
    <Icon name='home' />
    <Body>
      <Text>{name}</Text>
    </Body>
  </ListItem>
)
