import { Dimensions, Platform } from 'react-native'

const deviceHeight = Dimensions.get('window').height

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  row: {
    flex: 1,
    padding:10,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}
