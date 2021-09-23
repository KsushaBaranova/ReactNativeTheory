import React, {Component} from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

export interface TextButtonProps {
  title?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  onPress?: () => void;
}

class TextButton extends Component<TextButtonProps> {
  render() {
    return (
      <TouchableOpacity
        style={this.props.containerStyle}
        onPress={this.props.onPress}>
        <Text style={this.props.labelStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default TextButton;
