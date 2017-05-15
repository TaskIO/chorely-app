'use strict'
import React from 'react'
import { Text, Button, Container, Content, List, ListItem, Body, Title } from 'native-base'
import { setSelectedTask } from '../../../redux/reducers/tasks'
import s from './styles'

export default ({ setSelectedTask, task, navigate }) => {
  let destination

  switch(task.status) {
      case 'Completed':
          destination = 'CompleteTask'
          break;
      case 'Active':
          destination = 'ActiveTask'
          break;
      default:
          destination = 'PendingTask'
  }
  return (
    <ListItem
      onPress = {
        () => {
          setSelectedTask(task)
          navigate(destination)
        }
      }
    >
    <Body >
      <Text style={s.mainText}>{task.description}</Text>
      <Text note style={s.parenthetical} > Status: {task.status} </Text>
      <Text note style={s.parenthetical} > Assigned To: {(task.assignee) ? task.assignee.name : 'TBD'} </Text>
    </Body>
    </ListItem>
  )
}

