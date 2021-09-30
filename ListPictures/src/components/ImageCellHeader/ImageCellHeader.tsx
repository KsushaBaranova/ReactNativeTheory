import React from 'react';
import {Image, Text, View} from 'react-native';
import {Queue} from 'react-native-spacing-system';
import {ImageCellHeaderProps} from '../interfaces/interfaces';
import styles from './styles';

const ImageCellHeader: React.FC<ImageCellHeaderProps> = (
  props: ImageCellHeaderProps,
) => {
  return (
    <View style={styles.headerContainerStyle}>
      <Image
        style={styles.profileImageStyle}
        source={
          props.profileUrl
            ? {uri: props.profileUrl}
            : require('../../images/profile.png')
        }
      />
      <Queue size={10} />
      <Text style={styles.nameTextStyle}>
        {props.authorName ?? 'Incognito'}
      </Text>
    </View>
  );
};

export default ImageCellHeader;
