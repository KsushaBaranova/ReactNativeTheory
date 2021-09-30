import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {Inset, Stack} from 'react-native-spacing-system';
import ImageCellHeader from '../ImageCellHeader/ImageCellHeader';
import {ImageCellProps} from '../../interfaces/interfaces';
import LikesCell from '../LikesCell/LikesCell';

const screenWidth = Dimensions.get('window').width;
const imageHeight = 300;

const ImageCell: React.FC<ImageCellProps> = (props: ImageCellProps) => {
  return (
    <View>
      <Inset horizontal={20}>
        <ImageCellHeader {...props.headerProps} />
      </Inset>
      <Image
        style={styles.imageStyle}
        resizeMode={'contain'}
        source={{uri: props.imageUrl}}
      />
      <Stack size={5} />
      <Inset horizontal={20}>
        <LikesCell likes={props.likes} likeFoto={props.likeFoto} />
      </Inset>
    </View>
  );
};

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

export default ImageCell;
