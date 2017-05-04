import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class Home extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Home!</Text>
        <Button title="Go to Group" onPress={() => navigate('GroupTasks')} />
        <Button title="Go to task creation page" onPress={() => navigate('NewTask')} />
      </View>
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
