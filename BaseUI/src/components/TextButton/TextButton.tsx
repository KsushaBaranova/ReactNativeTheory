import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

export interface TextButtonProps {
  title?: string;
  containerStyle: object;
  labelStyle: object;
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
