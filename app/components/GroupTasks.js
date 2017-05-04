import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class GroupTasks extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Group page!!</Text>
        <ListView>Tasks</ListView>
        <Button title="Back to Home" onPress={() => navigate('Home')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'khaki',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
