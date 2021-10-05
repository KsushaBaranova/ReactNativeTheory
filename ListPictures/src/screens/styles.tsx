import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  additionViewStyle: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    paddingHorizontal: 0,
    paddingTop: 30,
    paddingBottom: 50,
  },
  flatListStyle: {
    flex: 1,
    width: '100%',
  },
  imageContainerStyle: {
    width: '100%',
  },
  emptyContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  emptyTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  viewDropdownStyle: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
  },
  buttonDwopdownStyle: {
    backgroundColor: 'darkslategrey',
    borderRadius: 20,
    height: 30,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDropdownStyle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  listDropdownStyle: {
    height: 120,
    borderColor: 'darkslategrey',
    borderWidth: 2,
  },
  listTextDropdownStyle: {
    fontSize: 14,
    color: 'darkslategrey',
    fontWeight: 'bold',
  },
  viewPrepearComponent: {
    width: '100%',
    alignItems: 'center',
    flexWrap: 'nowrap',
    zIndex: 1000,
  },
});

export default styles;
