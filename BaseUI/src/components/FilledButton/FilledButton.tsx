import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {FilledButtonProps} from '../../intrfaces';
import styles from './styles';

class FilledButton extends Component<FilledButtonProps> {
  render() {
    return (
      <TouchableOpacity
        style={[styles.touchableOpacityStyleButton, this.props.styleButton]}
        onPress={this.props.onPress}>
        <Text style={[styles.textStyleButton, this.props.styleText]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default FilledButton;
