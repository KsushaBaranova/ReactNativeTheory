import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 67,
    marginHorizontal: 20,
  },
  imageStyle: {
    height: 47,
    width: 47,
    borderRadius: 8,
  },
  textNameStyle: {
    color: 'rgb(77, 81, 128)',
    fontSize: 17,
    fontWeight: '500',
  },
  textContainer: {
    flexWrap: 'wrap',
    marginLeft: 20,
  },
  textDescriptionStyle: {
    color: 'rgb(181, 182, 221)',
    fontSize: 12,
  },
  leftBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
