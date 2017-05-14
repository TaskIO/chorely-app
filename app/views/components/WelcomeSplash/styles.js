import { Platform } from 'react-native'
import { cloudWhite, midnight } from '../../../../constants/colors'

export default {
  splash: {
    flex: .5,
    marginTop: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftCol: {
    flex: 1,
    alignItems: 'center',
  },
  rightCol: {
    flex: 2,
    alignItems: 'center',

  },
  icon: {
    color: midnight,
    fontSize: 100,
  },
  text: {
    color: cloudWhite,
    fontSize: 35,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
}
