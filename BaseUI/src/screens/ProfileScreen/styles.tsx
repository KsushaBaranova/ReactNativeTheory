import {StyleSheet} from 'react-native';

const styleProps = StyleSheet.create({
  backgroundStyle: {
    height: '100%',
  },
  filledButtonStyle: {},
  containerStyle: {
    alignSelf: 'flex-end',
  },
  labelStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  containerForFilledButton: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  textInputStyles: {
    color: 'black',
    height: 40,
  },
});

export default styleProps;
