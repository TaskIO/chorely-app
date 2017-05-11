'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { Container, Content, Text, Button, Form, Item, Icon, Input, List, ListItem, Body, Label, Title, Header } from 'native-base'
import GroupListItem from '../../groupTab/components/GroupListItem'
import { setViewerGroup } from '../../../redux/reducers/groups'


class HomeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm() {
    console.log('testing',this.props)
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
         <Header>
           <Body>
             <Title>My Groups</Title>
           </Body>
         </Header>
         <List>
          {this.props.groups.map(group=>(
            <GroupListItem
              key={group.id}
              name={group.name}
              id={group.id}
              setViewerGroup={this.props.setViewerGroup}
            />))}
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

/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  return {
    viewerUser: state.users.viewerUser,
    groups: state.groups.viewerGroups,
    viewerGroup: state.groups.viewerGroup
  }
}

const mapDispatch = (dispatch)=>{
  return{
    setViewerGroup:(id)=>{
      dispatch(setViewerGroup(id))
  }
  }
}

export default connect(mapState, mapDispatch)(HomeComponent)
