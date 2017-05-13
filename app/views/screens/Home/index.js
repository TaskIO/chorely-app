'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { View, Image, StatusBar } from 'react-native'
import { Container, Content, Text, Button, Form, Item, Icon, Input, Grid, Row, Col, List, ListItem, Body, Label, Title, Header } from 'native-base'
import AddFAB from '../../components/AddFAB'
import GroupListItem from '../../components/GroupListItem'
import { selectGroup } from '../../../redux/reducers/groups'
import { setGroupUsers } from '../../../redux/reducers/users'
import { setGroupTasks } from '../../../redux/reducers/users'

import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'
import s from './styles'

class HomeComponent extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
       <Image source={welcomeScreenBg} style={s.imageContainer}>
       <StatusBar hidden={true}/>
       <Content contentContainerStyle={s.content}>
       {
        (this.props.groups.length) ? <List>
              {this.props.groups.map(group=>(
                <GroupListItem
                  key={group.id}
                  group={group}
                  navigate={navigate}
                  selectGroup={this.props.selectGroup}
                />))}
             </List>
          :
          <Content contentContainerStyle={s.grid}>
          <Text>This is a test.</Text>
          <Text>The Test continues</Text>
          </Content>
       }
          </Content>
         <AddFAB navigate={navigate}/>
         </Image>
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
