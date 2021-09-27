import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {TextButtonProps} from '../../intrfaces';

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
