'use strict'
import React from 'react'
import { Text, Button, Container, Content, Title, Header, Item, Tabs, Tab, Icon, Input } from 'native-base'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TaskList from './TaskList'
import MemberList from './MemberList'
import { jumpToTab } from '../../../redux/reducers/navigation'

class SingleGroup extends React.Component {
  render() {
    const { navigate, dispatch } = this.props.navigation
    return (
      <Container>
        <Content>
          <Header searchBar rounded>
            <Item>
              <Input placeholder="Search" />
            </Item>
            <Button transparent onPress={() => dispatch(jumpToTab(2))}>
              <Icon name="add-circle" />
            </Button>
          </Header>
          <Tabs>
            <Tab heading="Members">
              <MemberList />
            </Tab>
            <Tab heading="Tasks">
              <TaskList navigate={navigate} />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    )
  }
}

export default connect(
  state => {
    return {
      allTasks: state.tasks
    }
  }
)(
  SingleGroup
)
