import React from 'react'
import { Text, Button, Content, Body, Form, Input, Label, Item } from 'native-base'

export default function TaskForm (props) {
  const { groupList, group, viewerGroups, toggleGroupList, changeGroup, taskInput, changeTaskInput } = props.parentProps
  return (
    <Content>
      <Form>
        <Item stackedLabel>
          <Label>Task Description:</Label>
          <Input
            onChangeText={changeTaskInput}
            value={taskInput}
          />
        </Item>
      </Form>
      <Body style={{flexDirection: 'row'}}>
        {
        taskInput
        ?
          <Button
            onPress={ () => {}}
            style={{flex: 1, maxWidth: 200, justifyContent: 'center'}}>
            <Text>Add Task</Text>
          </Button>
        : <Button disabled style={{flex: 1, maxWidth: 200, justifyContent: 'center'}}>
          <Text>Add Task</Text>
        </Button>
        }
      </Body>
    </Content>
  )
}
