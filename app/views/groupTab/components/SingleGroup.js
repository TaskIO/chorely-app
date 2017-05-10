'use strict'
import React from 'react'
import { Text, Button, Container, Content, Title, Header, Item, Tabs, Tab, Icon, Input } from 'native-base'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TaskList from './TaskList'
import MemberList from './MemberList'

class SingleGroup extends React.Component {
  render() {
    const { selectedTask, setBounty } = this.props.allTasks
    return (
      <Container>
        <Content>
          <Header searchBar rounded>
            <Item>
              <Input placeholder="Search" />
            </Item>
            <Button transparent>
              <Icon name="add-circle" />
            </Button>
            {/* <Text>GROUP INFO</Text>
              <Button>
                <Icon name="add-circle" />
                <Text>Create New Task</Text>
            </Button> */}
          </Header>
          <Tabs>
            <Tab heading="Members">
              <MemberList />
            </Tab>
            <Tab heading="Tasks">
              <TaskList />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    borderWidth: 1,
    borderColor: '#000000',
    fontSize: 8
  }
})

export default connect(
  state => {
    return {
      allTasks: state.tasks
    }
  }
)(
  SingleGroup
)
