import {Dimensions, StyleSheet} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const imageHeight = 300;

const styles = StyleSheet.create({
  footerContainerStyle: {
    height: 26,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageStyle: {
    height: imageHeight,
    width: screenWidth,
  },
});

export default styles;
