'use strict'
import React from 'react'
import { Container, Content, Text, Button, Form, Item, Icon, Input, List, ListItem, Body, Label, Drawer } from 'native-base';
import Sidebar from './Sidebar'
import getTheme from '../../../theme/native-base-theme/components';

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      showForm: false
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.openSidebar = this.openSidebar.bind(this)
    this.closeSidebar = this.closeSidebar.bind(this)
  }
  toggleForm() {
    const formState = this.state.showForm
    this.setState({
      showForm: !formState
    })
  }
  openSidebar() {
    this.sidebar._root.open()
  }
  closeSidebar() {
    this.sidebar._root.close()
  }
  render() {
    const formState = this.state.showForm
    return (
      <Drawer
        ref={ref => {this.sidebar = ref}}
        content={<Sidebar navigator={this.navigator} />}
        styles={{drawer: {backgroundColor: "white"}}}
        onClose={this.closeSidebar} >
        <Container>
          <Content>
            <Text style={getTheme()['NativeBase.Title']}>My Groups</Text>
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
            <Button onPress={this.openSidebar}>
              <Text>Open User Dashboard</Text>
            </Button>
          </Content>
        </Container>
      </Drawer>
    )
  }
}
