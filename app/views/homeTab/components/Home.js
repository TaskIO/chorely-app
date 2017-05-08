'use strict'
import React from 'react'
import { Container, Content, Text, Button, Form, Item, Icon, Input, List, ListItem, Body, Label, Title } from 'native-base';

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      showForm: false
    }
    this.toggleForm = this.toggleForm.bind(this)
  }
  toggleForm() {
    const formState = this.state.showForm
    this.setState({
      showForm: !formState
    })
  }
  render() {
    const formState = this.state.showForm
    return (
      <Container>
        <Content>
          <Title>My Groups</Title>
          <List>
            <ListItem>
              <Icon name="home" />
              <Body>
                <Text>Home</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Icon name="paper" />
              <Body>
                <Text>Work</Text>
              </Body>
            </ListItem>
          </List>
          <Button transparent onPress={this.toggleForm}>
            <Icon name="add-circle" />
            <Text>New Group</Text>
          </Button>
          {formState &&
          <Form>
            <Item stackedLabel>
              <Label>Group Name</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Other Stuff</Label>
              <Input />
            </Item>
          </Form>}
        </Content>
      </Container>
    )
  }
}
