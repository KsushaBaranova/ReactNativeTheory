import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {SocialNetworkButtonProps} from '../../intrfaces';
import styles from './styles';

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
