'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { Container, Content, Text, Button, Form, Item, Icon, Input, List, ListItem, Body, Label, Title, Header } from 'native-base'
import GroupListItem from '../../components/GroupListItem'
import { selectGroup } from '../../../redux/reducers/groups'
import { setGroupUsers } from '../../../redux/reducers/users'
import { setGroupTasks } from '../../../redux/reducers/users'



class HomeComponent extends React.Component {
  constructor(props) {
    super(props)
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
    const { navigate } = this.props.navigation
    return (
      <Container>
       <Content>
         <Header>
           <Body>
             <Title>My Groups</Title>
           </Body>
         </Header>
         <List>
          {this.props.groups.map(group=>(
            <GroupListItem
              key={group.id}
              group={group}
              navigate={navigate}
              selectGroup={this.props.selectGroup}
            />))}
         </List>
         <Button transparent onPress={this.toggleForm}>
           <Icon name="add-circle" />
           <Text>New Group</Text>
         </Button>
         <Button onPress={()=>{navigate('Profile')}}>
           <Text>Temp Button to Profile</Text>
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

/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  return {
    viewerUser: state.users.viewerUser,
    groups: state.groups.viewerGroups,
    viewerGroup: state.groups.viewerGroup
  }
}

const mapDispatch = (dispatch) => {
  return {
    selectGroup: (id) => {
      dispatch(selectGroup(id))
    }
  }
}

export default connect(mapState, mapDispatch)(HomeComponent)
