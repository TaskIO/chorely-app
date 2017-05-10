'use strict'
import React from 'react'
import { Text, Input, Button, Container, Content, Header, Body, Title, Form, Item, Label } from 'native-base'
import store from '../../../redux/store'
import { addSelectedTask } from '../../../redux/reducers/tasks'

export default class TaskForm extends React.Component {
  constructor() {
    super()
    this.state = {
      taskInput: ''
    }
  }

  render() {
    console.log(this.state)
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
          <Form>
            <Item stackedLabel>
              <Label>Task Description:</Label>
              <Input
                onChangeText={newTaskInput => this.setState({taskInput: newTaskInput})}
                value={taskInput}
              />
            </Item>
          </Form>
          <Button
            onPress={ () => {
              store.dispatch(addSelectedTask({name: taskInput}))
              navigate('BountyForm')
            }}
            style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text>{'Add Task'}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
