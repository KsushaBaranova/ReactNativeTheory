import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import {Inset, Stack} from 'react-native-spacing-system';
import ImageCellHeader, {
  ImageCellHeaderProps,
} from '../ImageCellHeader/ImageCellHeader';
import LikesCell from '../LikesCell/LikesCell';
import styles from './styles';

export type ImageCellProps = {
  imageUrl?: string;
  headerProps: ImageCellHeaderProps;
  likes?: number | undefined;
  likeFoto?: () => void;
};

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

export default ImageCell;
export {screenWidth, imageHeight};
