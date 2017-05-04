import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'

export default class NewTask extends React.Component {
  constructor(){

  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <TextInput
        style={{height: 40, borderColor: "gray", borderWidth: 1}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
