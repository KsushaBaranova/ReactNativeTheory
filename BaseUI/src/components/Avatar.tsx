import React, {Component} from 'react';
import {TouchableOpacity, Image, ImageBackground} from 'react-native';
import styles from '../styles/Avatar';

interface AvatarProps {
  avatar: object;
  onPress?: () => void;
  isEditMode: boolean;
}

class Avatar extends Component<AvatarProps> {
  render() {
    return (
      <TouchableOpacity
        style={styles.touchableOpacityStyle}
        onPress={this.props.onPress}
        disabled={!this.props.isEditMode}>
        <ImageBackground
          imageStyle={styles.imageStyle}
          style={styles.imageBackgroundStyle}
          source={this.props.avatar}>
          {this.props.isEditMode ? (
            <Image
              style={styles.iconStyle}
              source={require('../images/photo.png')}
            />
          ) : null}
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default Avatar;
