import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {FollowBlockProps} from '../../intrfaces';
import styles from './styles';

class FollowBlock extends Component<FollowBlockProps> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.block, styles.blockAlt]}>
          <Text style={styles.number}>{this.props.followers}</Text>
          <Text style={styles.text}>Followers</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.number}>{this.props.following}</Text>
          <Text style={styles.text}>Following</Text>
        </View>
      </View>
    );
  }
}

export default FollowBlock;
