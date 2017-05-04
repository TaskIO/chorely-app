import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default class SingleTask extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text> Task</Text>
        <Text> Description Here </Text>
        <ListView>Approved</ListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
