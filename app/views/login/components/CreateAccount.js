'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class CreateAccount extends React.Component {
  render() {
    const { navigate, dispatch } = this.props.navigation
    return(
      <View>
        <TouchableOpacity
          onPress={
            () => navigate('TabBarNavigation')
          }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
          <Text>{'Create Account'}</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
