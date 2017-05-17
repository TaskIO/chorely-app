'use strict'
//  R/RN/NB components
import React from 'react'
import { Image, StatusBar } from 'react-native'
import { Container, Content, Form, Input, InputGroup, Item, Label, Picker } from 'native-base'

// additional components
import SubmitFAB from '../../components/SubmitFAB'
import ReturnFAB from '../../components/ReturnFAB'

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
        icon: 'home',
        selectedItem: undefined,
      }

      this.handleNameChange = this.handleNameChange.bind(this)
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
      this.onValueChange = this.onValueChange.bind(this)
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
    onValueChange (value) {
        this.setState({
            icon : value
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
              <Item stackedLabel style={s.item}>
                <Label style={s.label}>Group Icon </Label>
                  <Picker
                        style={{width:300, color:'white'}}
                        supportedOrientations={['portrait','landscape']}
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.icon}
                        onValueChange={this.onValueChange}>
                        <Item label="Home" value="home" />
                        <Item label="Code" value="code" />
                        <Item label="Team" value="baseball" />
                        <Item label="Class" value="school" />
                        <Item label="Work" value="folder" />
                   </Picker>
              </Item>
            </Form>
            <SubmitFAB
              submitAction={this.props.createNewGroup}
              state={this.state}
              location={'Home'}
              locationParams={{}}
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
    viewerUser: state.users.viewerUser,
  }
}

const mapDispatch = { createNewGroup }

export default connect(mapState, mapDispatch)(NewGroup)
