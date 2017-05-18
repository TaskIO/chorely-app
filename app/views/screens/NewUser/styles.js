'use strict'
import { Dimensions } from 'react-native'
import { cloudWhite, belizeBlue, silver } from '../../../../constants/colors'

const deviceHeight = Dimensions.get('window').height

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  content: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    marginTop: deviceHeight / 6,
    alignItems: 'center',
  },
  item: {
    borderWidth: 34,
    marginRight: 15,
  },
  label: {
    fontSize: 24,
    color: cloudWhite,
  },
  mainText: {
    fontSize: 34,
    color: cloudWhite,
    textAlign: 'center',
  },
  parenthetical: {
    fontSize: 20,
    color: silver,
    textAlign: 'center',
  },
  input: {
    color: cloudWhite,
  },
  fab: {
    backgroundColor: cloudWhite,
  },
  icon: {
    color: belizeBlue
  },
}
