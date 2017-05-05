'use strict'
import React from 'react'
import { ListView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import store from '../../../redux/store'
import { addBounty } from '../../../redux/reducers/tasks'

export default class TaskTabScreenTwo extends React.Component {
    constructor() {
      super()
      this.state = {
        bountyAmount: '',
      }
    }
    render() {
      const bountyAmount = this.state.bountyAmount
      const {navigate, dispatch} = this.props.navigation
      return (
        <View>
        <Text> How much is this task worth? </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={bountyAmount => this.setState({bountyAmount})}
          value={bountyAmount}
        />
        <TouchableOpacity
          onPress={ () => {
            store.dispatch(addBounty(bountyAmount))
            dispatch({ type:'JUMP_TO_TAB', payload:{index:1} })
          }}
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow'
          }}>
          <Text>{'Add Bounty'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {
           () => this.props.navigation.goBack()
         }
          style = {
           {
          padding: 20,
          borderRadius: 20,
          backgroundColor: 'deeppink',
          marginTop: 20
        }
      } >
      <Text>{'Go back a screen this tab'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
          onPress={ () => navigate('TaskTabScreenThree')}
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'deeppink',
            marginTop:20
          }}>
          <Text>{'Go to Single Task'}</Text>
        </TouchableOpacity>
      </View>
      );
    }
}
