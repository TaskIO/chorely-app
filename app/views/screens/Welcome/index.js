'use strict'
import React from 'react'
import { Image, StatusBar, View } from 'react-native'
import { Button, Col, Container, Content, Icon, H1, Text, Row } from 'native-base'
import styles from './styles'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'


export default class Welcome extends React.Component {
  render() {
    const { navigate, dispatch } = this.props.navigation
    return (

      <Container>
      <Image source={welcomeScreenBg} style={styles.imageContainer}>
      <StatusBar hidden={true}/>
      <Content contentContainerStyle = {styles.row}>
        <Content contentContainerStyle={styles.row}>
          <Icon name='home'/>
          <H1 >Welcome to Chorely</H1>
        </Content>
        <View style={styles.row}>
        <Button block
          onPress={
            () => navigate('Login')
          }
          style={{marginTop:10}}
        >
        <Text>{'LOGIN'}</Text>
        </Button>
        <Button
          block outline bordered
          onPress={
            () => navigate('CreateAccount')
          }
          style={{marginTop:10}}
        >
        <Text>{'SIGN UP'}</Text>
        </Button>
        </View>
      </Content>
      </Image>
      </Container>
    )
  }
}
