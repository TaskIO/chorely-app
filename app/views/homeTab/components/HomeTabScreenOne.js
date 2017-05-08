'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class HomeTabScreenOne extends React.Component {
  render() {
    const { navigate, dispatch } = this.props.navigation
    return(
      <View style={{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Home Screen One' }</Text>
        <TouchableOpacity
          onPress={
            () => this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:1} })
          }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
          <Text>{'Go to Group'}</Text>
        </TouchableOpacity>
                <TouchableOpacity
          onPress={
            () => this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:2} })
          }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
          <Text>{'Go to task creation page'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () =>  navigate('HomeTabScreenTwo') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
          <Text>{'Go to Home Tab Screen two'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
