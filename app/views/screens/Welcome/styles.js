'use strict'

import { Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  content: {
    flex: 1,
    padding:10,
    justifyContent: 'center',
  }
}
