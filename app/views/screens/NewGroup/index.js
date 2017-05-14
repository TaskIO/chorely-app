'use strict'
//  R/RN/NB components
import React from 'react'
import { Image, StatusBar } from 'react-native'
import { Container, Content, Form, Input, InputGroup, Item, Label } from 'native-base'

// additional components
import SubmitFAB from '../../components/SubmitFAB'

// styles and background image
import s from './styles'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'

// redux and dispatchers
import { connect } from 'react-redux'
import { createNewGroup } from '../../../redux/reducers/groups'

class NewGroup extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        viewerId: props.viewerUser.id,
        name: '',
        description: '',
      }

      this.handleNameChange = this.handleNameChange.bind(this)
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    }

    handleNameChange(name) {
      this.setState({
        name
      })
    }
    handleDescriptionChange(description) {
      this.setState({
        description
      })
    }

    render() {
      return (
        <Container>
        <Image source={welcomeScreenBg} style={s.imageContainer}>
        <StatusBar hidden={true} />
          <Content contentContainerStyle={s.content} >
            <Form style={s.form}>
              <Item stackedLabel style={s.item}>
                <Label style={s.label}> Group Name </Label>
                <InputGroup >
                  <Input
                    style={s.input}
                    onChangeText={this.handleNameChange}
                  />
                </InputGroup>
              </Item>
              <Item stackedLabel style={s.item}>
                <Label style={s.label}>Group Description </Label>
                <InputGroup >
                  <Input
                    style={s.input}
                    onChangeText={this.handleDescriptionChange}
                  />
                </InputGroup>
              </Item>
              <SubmitFAB
                submitAction={this.props.createNewGroup}
                state={this.state}
                location={'Home'}
                navigate={this.props.navigation.navigate}
              />
            </Form>
          </Content>
        </Image>
        </Container>
      )
    }
  }
  /* -----------------    CONTAINER     ------------------ */

const mapState = state => {
  return {
    viewerUser: state.users.viewerUser,
  }
}

const mapDispatch = { createNewGroup }

export default connect(mapState, mapDispatch)(NewGroup)
