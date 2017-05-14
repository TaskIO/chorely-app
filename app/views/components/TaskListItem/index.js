'use strict'
import React from 'react'
import { Text, Button, Container, Content, List, ListItem, Body, Title } from 'native-base'
import { setSelectedTask } from '../../../redux/reducers/tasks'
import s from './styles'

export default ({ setSelectedTask, task, navigate }) => {
  return (
    <ListItem
      onPress = {
        () => {
          setSelectedTask(task)
          navigate('Task')
        }
      }
    >
    <Body >
      <Text style={s.mainText}>{task.description}</Text>
      <Text note style={s.parenthetical} > Status: {task.status} </Text>
      <Text note style={s.parenthetical} > Assigned To: {(task.assignee_id)?task.assignee_id: 'n/a'} </Text>
    </Body>
    </ListItem>
  )
}

