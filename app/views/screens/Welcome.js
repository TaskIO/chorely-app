'use strict'
import React from 'react'
import { View } from 'react-native'
import { Container, Content, Button, Text } from 'native-base'
import styles from '../styles/welcomeStyles'

export default class Welcome extends React.Component {
  render() {
    const { navigate, dispatch } = this.props.navigation
    return (
      <Container>
      <Content>
      <View style={styles.formContainer}>
          <Text>{'Welcome'}</Text>
          <Button
            onPress={
              () => navigate('Login')
            }
            style={styles.welcomeButton}
            >
            <Text>{'Go to Login'}</Text>
          </Button>
          <Button
            onPress={
              () => navigate('CreateAccount')
            }>
            <Text>{'Create Account'}</Text>
            </Button>
      </View>
      </Content>
      </Container>
    )
  }
}
