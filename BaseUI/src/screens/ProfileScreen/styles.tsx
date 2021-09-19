import {StyleSheet} from 'react-native';

const styleProps = StyleSheet.create({
  forBackground: {
    height: '100%',
  },
  forFilledButton: {},
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
});

export default styleProps;
