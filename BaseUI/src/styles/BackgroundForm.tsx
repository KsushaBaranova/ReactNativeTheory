import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  editButton: {
    flex: 0.2,
    paddingBottom: 5,
  },
  viewHead: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    marginTop: 20,
    marginBottom: 50,
  },
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
  viewText: {
    flex: 0.5,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 25,
    paddingLeft: 20,
    marginTop: 60,
  },
  orSignWithTextStyle: {
    color: 'rgb(181, 182, 221)',
    fontSize: 13,
  },
});

export default styles;
