'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Welcome extends React.Component {
  render() {
    const { navigate, dispatch } = this.props.navigation
    return(
      <View>
          <Text>{'Welcome'}</Text>
          <TouchableOpacity
            onPress={
              () => navigate('Login')
            }
            style={{
              padding:20,
              borderRadius:20,
              backgroundColor:'yellow',
              marginTop:20
            }}>
            <Text>{'Go to Login'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={
                () => navigate('CreateAccount')
              }
              style={{
                padding:20,
                borderRadius:20,
                backgroundColor:'yellow',
                marginTop:20
              }}>
              <Text>{'go to Create Account'}</Text>
              </TouchableOpacity>
      </View>
    )
  }
}
