import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import store from '../store'
import { addBounty } from '../reducers/tasks'


export default class NewBounty extends React.Component {
  constructor() {
    super()
    this.state = {
      bountyAmount: '',
    }
  }
  render() {
    const bountyAmount = this.state.bountyAmount
    return (
      <View>
        <Text> How much is this task worth? </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={bountyAmount => this.setState({bountyAmount})}
          value={bountyAmount}
        />
        <Button
          title="Add amount"
          onPress={() => {
            store.dispatch(addBounty(bountyAmount));
          }}
        />
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
