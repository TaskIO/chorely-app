'use strict'
import React from 'react'
import { Image, StatusBar, View } from 'react-native'
import { Container, Content, Button, Text, Grid, Col } from 'native-base'
import styles from '../../theme/styles/welcomeStyles'
import welcomeScreenBg from '../../theme/img/blue-fabric.jpeg'


export default class Welcome extends React.Component {
  render() {
    const { navigate, dispatch } = this.props.navigation
    return (
      <Container style={{backgroundColor:'#bdc3c7'}}>
      <StatusBar barStyle='light-content'/>
          <View style={styles.logoContainer}>
            <Text>Welcome to Chorely</Text>
          </View>

          <View style={styles.buttonContainer}>
          <Grid>
          <Col>
          <Button
            onPress={
              () => navigate('Login')
            }
            style={styles.button}
            >
            <Text>{'Login'}</Text>
          </Button>
          </Col>
          <Col>
          <Button
            onPress={
              () => navigate('CreateAccount')
            }
            style={styles.button}
            >
            <Text>{'Create Account'}</Text>
            </Button>
            </Col>
            </Grid>
          </View>
      </Container>
    )
  }
}
