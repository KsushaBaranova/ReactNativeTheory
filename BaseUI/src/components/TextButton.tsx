import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export interface TextButtonProps {
  title?: string;
  align?: 'flex-start' | 'center' | 'flex-end';
  color?: string;
  fontSize?: number;
  onPress?: () => void;
}

class TextButton extends Component<TextButtonProps> {
  render() {
    const styles = StyleSheet.create({
      touchableOpacityStyle: {
        alignSelf: this.props.align,
      },
      styleText: {
        color: this.props.color,
        fontSize: this.props.fontSize,
      },
    });

    return (
      <TouchableOpacity
        style={styles.touchableOpacityStyle}
        onPress={this.props.onPress}>
        <Text style={styles.styleText}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default TextButton;
