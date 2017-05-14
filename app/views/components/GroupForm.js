import React from 'react'
import { Text, Button, Content, Body, Form, Input, Label, Item } from 'native-base'

export default function GroupForm (props) {
  const { groupName, changeGroupName, groupDescription, changeGroupDescription, createNewTask, group } = props.parentProps
  const { dispatch } = props.parentProps.navigation
  return (
    <Content>
      <Form>
        <Item stackedLabel>
          <Label>Group Name</Label>
          <Input
            onChangeText={changeGroupName}
            value={groupName}/>
        </Item>
        <Item stackedLabel>
          <Label>Group Description</Label>
          <Input
            onChangeText={changeGroupDescription}
            value={groupDescription}/>
        </Item>
        <Button onPress={() => {
          console.log('HEYY!!!!!! THESE ARE PROPS', this.state.groupName, this.state.groupDescription)
        }}>
          <Text> Create Group </Text>
        </Button>
      </Form>
    </Content>
  )
}
