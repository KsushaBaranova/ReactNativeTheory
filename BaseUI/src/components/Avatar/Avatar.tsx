import React, {Component} from 'react';
import {TouchableOpacity, Image, ImageBackground} from 'react-native';
import {AvatarProps} from '../../intrfaces';
import styles from './styles';

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
          {this.props.isEditMode && (
            <Image
              style={styles.iconStyle}
              source={require('../../images/photo.png')}
            />
          )}
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default Avatar;
