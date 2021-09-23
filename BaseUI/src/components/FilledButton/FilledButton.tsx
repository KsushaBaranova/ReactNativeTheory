import React, {Component} from 'react';
import {Text, TextStyle, TouchableOpacity} from 'react-native';
import styles from './styles';

export interface FilledButtonProps {
  title?: string;
  onPress?: () => void;
  styleButton?: object;
  styleText?: TextStyle;
}

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
