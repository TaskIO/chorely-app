'use strict'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class GroupTabScreenOne extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Group Screen One' }</Text>
        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('GroupTabScreenTwo') }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'blue',
            marginTop:20
          }}>
          <Text>{'Go to next screen this tab'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
