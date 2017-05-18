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
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex:1,
    alignSelf:'stretch',
  },
  grid: {
    flex: 1,
    marginBottom: deviceHeight / 4,
    alignItems: 'center',
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  mainText: {
    fontSize: 34,
    color: cloudWhite,
    textAlign:'center',
  },
  parenthetical: {
    fontSize: 20,
    color: silver,
    textAlign:'center',
  },
  item: {
    borderWidth: 34,
    marginRight: 15,
  },
  fab: {
    backgroundColor: cloudWhite,
  },
  icon: {
    color: belizeBlue
  },
}
