'use strict'
import { Dimensions } from 'react-native'
import { cloudWhite, midnight, silver } from '../../../../constants/colors'

const deviceHeight = Dimensions.get('window').height

export default {
  mainText: {
    fontSize: 24,
    color: cloudWhite,
  },
  parenthetical: {
    fontSize: 14,
    color: midnight,
  },
}
