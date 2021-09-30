import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Queue} from 'react-native-spacing-system';
import {LikesCellProps} from '../../interfaces/interfaces';
import styles from './styles';

const LikesCell: React.FC<LikesCellProps> = (props: LikesCellProps) => {
  return (
    <View style={styles.viewContainerStyle}>
      <TouchableOpacity onPress={props.likeFoto}>
        <Image
          style={styles.imageStyle}
          resizeMode={'contain'}
          source={require('../../images/likes.png')}
        />
      </TouchableOpacity>

      <Queue size={10} />
      <Text style={styles.textStyle}>{props.likes} </Text>
    </View>
  );
};

export default LikesCell;
