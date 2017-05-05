'use strict'
import React from 'react'
import { ListView, View, Text, TouchableOpacity } from 'react-native'
export default class TaskTabScreenTwo extends React.Component {

  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text> Task Name</Text>
        <Text> Task Description Here </Text>
        <Text>Approved</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('TaskTabScreenThree') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
          <Text>{'Go to screen three'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () => this.props.navigation.goBack() }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'deeppink',
            marginTop:20
          }}>
          <Text>{'Go back a screen this tab'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
