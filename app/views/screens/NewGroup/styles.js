'use strict'
import { Dimensions, Platform } from 'react-native'
import { cloudWhite, belizeBlue } from '../../../../constants/colors'

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
  pickerItem: {
    alignSelf:'stretch',
    borderWidth: 34,
    marginRight: 15,
  },
  picker:{
    width: (Platform.OS=='ios') ? 100 : 175,
  },
  label: {
    fontSize: 24,
    color: cloudWhite,
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
