import React, {Component} from 'react';
import {ImageSourcePropType} from 'react-native';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

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

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    width: 45,
    height: 45,
    backgroundColor: 'rgb(255, 103, 97)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SocialNetworkButton;
