'use strict'
import React from 'react'
import { Container, Content, Text, Button, Form, Item, Icon, Input, List, ListItem, Body, Label, Drawer, Header } from 'native-base';
import getTheme from '../../../theme/native-base-theme/components';

export default class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Header><Text>Chorely</Text></Header>
          <List>
            <ListItem>
              <Text>USERNAME</Text>
            </ListItem>
            <ListItem>
              <Text>E-MAIL</Text>
            </ListItem>
            <ListItem>
              <Text>LINK TO MY GROUPS</Text>
            </ListItem>
            <ListItem>
              <Text>AND OTHER STUFF TOO</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}
