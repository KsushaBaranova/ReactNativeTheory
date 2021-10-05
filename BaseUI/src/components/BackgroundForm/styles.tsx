import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundImageStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  viewStyle: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 50,
  },
  orSignWithTextStyle: {
    color: 'rgb(181, 182, 221)',
    fontSize: 13,
  },
  containerStylePassword: {
    alignSelf: 'flex-start',
  },
  labelStylePassword: {
    color: 'rgb(64, 80, 164)',
  },
  containerStyleAccount: {
    alignSelf: 'center',
  },
  labelStyleAccount: {
    color: 'rgb(181, 182, 221)',
  },
});

export default styles;
