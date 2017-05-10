'use strict'
import React from 'react'
import { Text, Input, Button, Container, Content, Header, Body, Title, Form, Item, Label, Picker } from 'native-base'
import store from '../../../redux/store'
import { addSelectedTask } from '../../../redux/reducers/tasks'

const PickerItem = Picker.Item

export default class TaskForm extends React.Component {
  constructor() {
    super()
    this.state = {
      taskInput: '',
      group: {}
    }
    this.changeTaskInput = this.changeTaskInput.bind(this)
    this.changeGroup = this.changeGroup.bind(this)
  }
  changeTaskInput(taskInput) {
    this.setState({
      taskInput
    })
  }
  changeGroup(group) {
    this.setState({
      group
    })
  }
  render() {
    const { navigate, dispatch } = this.props.navigation;
    const taskInput = this.state.taskInput
    return (
      <Container>
        <Content>
          <Header>
            <Body>
              <Title>New Task</Title>
            </Body>
          </Header>
          <Button />
          <Form>
            <Item stackedLabel>
              <Label>Task Description:</Label>
              <Input
                onChangeText={this.changeTaskInput}
                value={taskInput}
              />
            </Item>
          </Form>
          <Body style={{flexDirection: 'row'}}>
            <Button
              onPress={ () => {
                store.dispatch(addSelectedTask({name: taskInput}))
                navigate('BountyForm')
              }}
              style={{flex: 1, maxWidth: 200}}>
              <Text style={{textAlign: 'center'}}>{'Add Task'}</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}
