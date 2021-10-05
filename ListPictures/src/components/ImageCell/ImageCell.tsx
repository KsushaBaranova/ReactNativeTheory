import React from 'react';
import {Image, View} from 'react-native';
import {Inset, Stack} from 'react-native-spacing-system';
import ImageCellHeader from '../ImageCellHeader/ImageCellHeader';
import {ImageCellProps} from '../../interfaces/interfaces';
import styles from './styles';
import ImageCellFooter from '../ImageCellFooter/ImageCellFooter';

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
        <ImageCellFooter likes={props.likes} likeFoto={props.likeFoto} />
      </Inset>
    </View>
  );
};

export default ImageCell;
