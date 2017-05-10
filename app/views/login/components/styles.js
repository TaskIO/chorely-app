
import { Dimensions, Platform } from 'react-native'

const deviceHeight = Dimensions.get('window').height;

export default {
  formContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30,
  }
}
