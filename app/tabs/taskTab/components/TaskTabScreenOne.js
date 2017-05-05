'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class TaskTabScreenOne extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Task Screen One' }</Text>

        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('TaskTabScreenTwo') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow'
          }}>
          <Text>{'Go to next screen this tab'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={
            () => this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{index:0} })
          }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'deeppink',
            marginTop:20
          }}>
          <Text>{'jump to home'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
