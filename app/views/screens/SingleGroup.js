'use strict'
import React from 'react'
import { Button, Container, Content, Header, Item, Tabs, Tab, Icon, Input } from 'native-base'
import { connect } from 'react-redux'
import TaskList from '../components/TaskList'
import MemberList from '../components/MemberList'

class SingleGroup extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Content>
          <Header searchBar rounded>
            <Item>
              <Input placeholder="Search" />
            </Item>
            <Button transparent onPress={() => navigate('NewTask')}>
              <Icon name="add-circle" />
            </Button>
          </Header>
          <Tabs>
            <Tab heading="Tasks">
              <TaskList navigate={navigate} />
            </Tab>
            <Tab heading="Members">
              <MemberList />
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
