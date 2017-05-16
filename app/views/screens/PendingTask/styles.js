'use strict'
import { Dimensions } from 'react-native'
import { cloudWhite, belizeBlue, midnight, silver, rose } from '../../../../constants/colors'

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
  list: {
    flex: 1,
    alignSelf: 'stretch',
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
    fontSize: 25,
    color: cloudWhite,
  },
  task: {
    fontSize: 24,
    color: rose,
  },
  input: {
    color: cloudWhite,
  },
  filter: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  mainText: {
    fontSize: 25,
    color: cloudWhite,
    textAlign:'center',
  },
  midnight: {
    fontSize: 16,
    color: midnight,
  },
  midnightIcon: {
    color: midnight
  },
  parenthetical: {
    fontSize: 20,
    color: silver,
    textAlign: 'center',
  },
  fab: {
    backgroundColor: cloudWhite,
  },
  icon: {
    color: belizeBlue
  },
  member: {
    fontSize: 16,
    color: midnight,
    marginLeft: 5
  }
}
