'use strict'
//  R/RN/NB components
import React from 'react'
import { Image, StatusBar } from 'react-native'
import { Container, Content, Text, Grid,  Col, List } from 'native-base'

// additional components
import AddFAB from '../../components/AddFAB'
import GroupListItem from '../../components/GroupListItem'

// styles and background image
import s from './styles'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'

// redux and dispatchers
import { connect } from 'react-redux'
import { selectGroup } from '../../../redux/reducers/groups'

class HomeComponent extends React.Component{
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Image source={welcomeScreenBg} style={s.imageContainer}>
        <StatusBar hidden={true} />
        <Content contentContainerStyle={s.content}>
        {
          (this.props.groups.length) ?
            <List style={s.list}>
              {this.props.groups.map( group => {
                return <GroupListItem
                  key={group.id}
                  group={group}
                  navigate={navigate}
                  selectGroup={this.props.selectGroup}
                />
              })}
            </List>
          :
            <Grid style={s.grid}>
            <Col style={s.column}>
              <Text style={s.mainText}>No groups yet</Text>
              <Text style={s.parenthetical}>(Add one below)</Text>
            </Col>
            </Grid>
        }
        </Content>
        <AddFAB
          navigate={navigate}
          location={'NewGroup'}
        />
        </Image>
     </Container>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = state => {
  return {
    viewerUser: state.users.viewerUser,
    groups: state.groups.viewerGroups,
    viewerGroup: state.groups.viewerGroup
  }
}

const mapDispatch = dispatch => {
  return {
    selectGroup: id => {
      dispatch(selectGroup(id))
    }
  }
}

export default connect(mapState, mapDispatch)(HomeComponent)
