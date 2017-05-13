'use strict'
import React from 'react'
import { Form, Item, Label, InputGroup, Input, Button } from 'native-base'
import s from './styles'

export default ({changeHandlers}) => (
  <Form>
  <Item stackedLabel>
    <Label>Email</Label>
    <InputGroup borderType="underline" >
      <Input onChangeText={changeHandlers.handleEmailChange}/>
    </InputGroup>
  </Item>
  <Item stackedLabel last>
    <Label>Password</Label>
    <InputGroup borderType="underline" >
      <Input onChangeText={changeHandlers.handlePasswordChange}/>
    </InputGroup>
  </Item>
  <Button
  onPress={
    () => {
      this.props.fetchViewer(this.state)
      .then(navigate('Home'))
      .catch(console.error)
    }
  }
  >
  <Text>{'Login'}</Text>
  </Button>
</Form>
)
