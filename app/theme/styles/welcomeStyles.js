import { Dimensions, Platform } from 'react-native'

const deviceHeight = Dimensions.get('window').height

export default {
  formContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30,
  },
  welcomeButton: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  buttonContainer: {
    flex: 1,
    marginTop: deviceHeight / 2,
  },
  button: {
    alignSelf: 'center',
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30,
  },
  logo: {
    position: 'absolute',
    left: (Platform.OS === 'android') ? 40 : 50,
    top: (Platform.OS === 'android') ? 35 : 60,
    width: 280,
    height: 100,
  },
  text: {
    color: '#D8D8D8',
    bottom: 6,
  },
}
