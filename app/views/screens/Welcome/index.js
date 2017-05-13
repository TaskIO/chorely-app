'use strict'
//  R/RN/NB components
import React from 'react'
import { Image, StatusBar } from 'react-native'
import { Container, Content} from 'native-base'

// custom components
import WelcomeSplash from '../../components/WelcomeSplash'
import WelcomeButtons from '../../components/WelcomeButtons'

// styles and background image
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
