'use strict'
import React from 'react'
import { Container, Content, Text, Button } from 'native-base';
import getTheme from '../../../theme/native-base-theme/components';


export default class TaskTabScreenThree extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Text> Task Name</Text>
          <Text> Task Description Here </Text>
          <Text>Approved</Text>
          <Button
            onPress={ () => this.props.navigation.navigate('TaskTabScreenThree') }
            style={{
              padding:20,
              borderRadius:20,
              backgroundColor:'yellow',
              marginTop:20
            }}>
            <Text>{'Go to screen three'}</Text>
          </Button>

          <Button
            onPress={ () => this.props.navigation.goBack() }
            style={{
              padding:20,
              borderRadius:20,
              backgroundColor:'deeppink',
              marginTop:20
            }}>
            <Text>{'Go back a screen this tab'}</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
