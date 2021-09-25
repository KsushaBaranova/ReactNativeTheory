import React, {Component} from 'react';
import {ImageSourcePropType} from 'react-native';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

export interface SocialNetworkButtonProps {
  image: ImageSourcePropType;
}

class SocialNetworkButton extends Component<SocialNetworkButtonProps> {
  render() {
    return (
      <TouchableOpacity style={styles.touchableOpacityStyle}>
        <Image source={this.props.image} />
      </TouchableOpacity>
    );
  }
}

export default SocialNetworkButton;
