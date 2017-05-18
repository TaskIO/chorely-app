'use strict'
//  R/RN/NB components
import React from 'react'
import { Image, StatusBar } from 'react-native'
import { Text, Grid, Col, Form, Item, Label, Input, InputGroup, Container, Content } from 'native-base'

// additional components
import SubmitFAB from '../../components/SubmitFAB'
import ReturnFAB from '../../components/ReturnFAB'


// styles and background image
import s from './styles'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'

// redux and dispatchers
import { connect } from 'react-redux'
import { addUserToGroup } from '../../../redux/reducers/groups'

class NewUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      groupId: props.viewerGroup.id,
      creatorId: props.viewerUser.id,
      newUserEmail: '',
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
  }
  handleEmailChange(newUserEmail) {
    this.setState({
      newUserEmail
    })
  }

    render() {
      return (
        <Container>
        <Image source={welcomeScreenBg} style={s.imageContainer}>
          <StatusBar hidden={true} />
          <Content contentContainerStyle={s.content}>
            <Form style={s.form}>
              <Label style={s.label}> New Member Email </Label>
              <Item stackedLabel style={s.item}>
                <InputGroup>
                  <Input style={s.input} onChangeText={this.handleEmailChange} />
                </InputGroup>
              </Item>
              <Text style={s.parenthetical}>(Must match another Chorely user)</Text>
            </Form>
        <SubmitFAB
          submitAction={this.props.addUserToGroup}
          state={this.state}
          location={'GroupMembers'}
          locationParams={{groupId: this.state.groupId}}
          navigate={this.props.navigation.navigate}
        />
        <ReturnFAB
          goBack={this.props.navigation.goBack}
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
    viewerGroup: state.groups.viewerGroup,
    viewerUser: state.users.viewerUser
  }
}

const mapDispatch = { addUserToGroup }

export default connect(mapState, mapDispatch)(NewUser)
