'use strict'
//  R/RN/NB components
import React from 'react'
import { StatusBar, Image } from 'react-native'
import {
  Text,
  Button,
  Container,
  Content,
  List,
  Icon,
  Picker,
  Item
} from 'native-base'

// additional components
import AddFAB from '../../components/AddFAB'
import ReturnFAB from '../../components/ReturnFAB'
import MemberTaskFAB from '../../components/MemberTaskFAB'
import MemberListItem from '../../components/MemberListItem'

// styles and background image
import s from './styles'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'

// redux and dispatchers
import { connect } from 'react-redux'
import { selectGroup } from '../../../redux/reducers/groups'

class GroupMembers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orderedMembers: props.members,
      selectedValue: 'Sort Members'
    }
    this.onValueChange = this.onValueChange.bind(this)
    this.orderMembersByMostPoints = this.orderMembersByMostPoints.bind(this)
    this.orderMembersByLeastPoints = this.orderMembersByMostPoints.bind(this)
    this.orderMembersAZ = this.orderMembersAZ.bind(this)
    this.orderMembersZA = this.orderMembersZA.bind(this)
  }

  orderMembersAZ() {
    const sortedMembers = this.props.members.sort((a, b) => {
      var nameA = a.name.toUpperCase()
      var nameB = b.name.toUpperCase()
      if (nameA < nameB) return -1
      if (nameA > nameB) return 1
      return 0
    })

    return sortedMembers
  }

  orderMembersZA() {
    const sortedMembers = this.props.members.sort((a, b) => {
      var nameA = a.name.toUpperCase()
      var nameB = b.name.toUpperCase()
      if (nameA < nameB) return 1
      if (nameA > nameB) return -1
      return 0
    })

    return sortedMembers
  }

  orderMembersByMostPoints() {
    const sortedByPoints = this.props.group.userGroups.sort(
      (a, b) => a.points - b.points
    )
    const order = sortedByPoints.map(points => points.user.id)
    const sortedMembers = this.props.members.sort(
      (a, b) => order.indexOf(b.id) - order.indexOf(a.id)
    )

    return sortedMembers
  }

  orderMembersByLeastPoints() {
    const sortedByPoints = this.props.group.userGroups.sort(
      (a, b) => a.points - b.points
    )
    const order = sortedByPoints.map(points => points.user.id)
    const sortedMembers = this.props.members.sort(
      (a, b) => order.indexOf(a.id) - order.indexOf(b.id)
    )

    return sortedMembers
  }

  onValueChange(orderType) {
    let sortedMembers
    switch (orderType) {
      case 'most':
        sortedMembers = this.orderMembersByMostPoints()
        break
      case 'least':
        sortedMembers = this.orderMembersByLeastPoints()
        break
      case 'az':
      sortedMembers = this.orderMembersAZ()
        break
      case 'za':
      sortedMembers = this.orderMembersZA()
        break
    }
    this.setState({
      orderedMembers: sortedMembers
    })
  }

  componentDidMount() {
    const groupId = this.props.navigation.state.params.groupId
    this.props.selectGroup(groupId)
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Image source={welcomeScreenBg} style={s.imageContainer}>
          <StatusBar hidden={true} />
          <Content contentContainerStyle={s.content}>
            <List style={s.list}>
              {this.state.orderedMembers.map(member => {
                return (
                  <MemberListItem
                    key={member.id}
                    member={member}
                    navigate={navigate}
                    userGroups={this.props.group.userGroups}
                  />
                )
              })}

              <Button transparent onPress={this.orderMembersAZ}>
                <Icon style={s.midnightIcon} name="funnel" />
                <Picker
                  supportedOrientations={['portrait', 'landscape']}
                  iosHeader="Select one"
                  mode="dropdown"
                  selectedValue={this.state.selectedValue}
                  onValueChange={this.onValueChange}
                >
                  <Item label="Most Points" value="most" />
                  <Item label="Least Points" value="least" />
                  <Item label="A - Z" value="az" />
                  <Item label="Z - A" value="za" />
                </Picker>
                <Text style={s.midnight}>Sort Group</Text>
              </Button>
            </List>
            <AddFAB navigate={navigate} location={'NewTask'} />
            <ReturnFAB goBack={() => navigate('Home')} />
            <MemberTaskFAB
              navigate={navigate}
              icon={'list'}
              location={'GroupTasks'}
              locationParams={{ groupId: this.props.group.id }}
            />
          </Content>
        </Image>
      </Container>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */
const mapState = state => {
  return {
    group: state.groups.viewerGroup,
    members: state.groups.viewerGroup.users
  }
}

const mapDispatch = { selectGroup }

export default connect(mapState, mapDispatch)(GroupMembers)
