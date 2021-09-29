import {StyleSheet} from 'react-native';
import {imageHeight, screenWidth} from './ImageCell';

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
