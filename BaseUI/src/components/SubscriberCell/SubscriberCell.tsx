import React from 'react';
import {Text} from 'react-native';
import {Image, View} from 'react-native';
import {SubscriberCellPros} from '../../intrfaces';
import styles from './styles';

const SubscriberCell: React.FC<SubscriberCellPros> = ({
  subscriber,
  children,
}) => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.leftBlock}>
        <Image style={styles.imageStyle} source={subscriber.image} />
        <View style={styles.textContainer}>
          <Text style={styles.textNameStyle}>{subscriber.title}</Text>
          <Text style={styles.textDescriptionStyle}>
            {subscriber.description}
          </Text>
        </View>
      </View>
      <View>{children}</View>
    </View>
  );
};

export default SubscriberCell;
