'use strict'
import React from 'react'
import { Image, StatusBar, View } from 'react-native'
import { Button, Col, Container, Content, Icon, H1, Text, Row } from 'native-base'
import WelcomeSplash from '../../components/WelcomeSplash'
import WelcomeButtons from '../../components/WelcomeButtons'

import styles from './styles'
import welcomeScreenBg from '../../../theme/img/blue-fabric.jpeg'


export default class Welcome extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
      <Image source={welcomeScreenBg} style={styles.imageContainer}>
      <StatusBar hidden={true}/>
      <Content contentContainerStyle = {styles.content}>
      <WelcomeSplash />
      <WelcomeButtons navigate={navigate} />
      </Content>
      </Image>
      </Container>
    )
  }
}
