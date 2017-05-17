'use strict'
//  R/RN/NB components
import React from 'react'
import { StatusBar, Image } from 'react-native'
import { Text, Button, Container, Content, List, Icon } from 'native-base'

// additional components
import AddFAB from '../../components/AddFAB'
import ReturnFAB from '../../components/ReturnFAB'
import MemberTaskFAB from '../../components/MemberTaskFAB'
import MemberListItem from '../../components/MemberListItem'
import FilterAZ from '../../components/FilterAZ'

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
      orderedMembers: props.members
    }
    this.orderMembersAZ = this.orderMembersAZ.bind(this)
  }

  orderMembersAZ() {
    const sortedMembers = this.props.members.sort((a, b) => {
      var nameA = a.name.toUpperCase()
      var nameB = b.name.toUpperCase()
      if (nameA < nameB) return -1
      if (nameA > nameB) return 1
      return 0
    })
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
                <Text>Sort A-Z</Text>
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
