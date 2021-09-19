import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export interface FilledButtonProps {
  title: string;
  onPress?: () => void;
  styleButton?: object;
}

class FilledButton extends Component<FilledButtonProps> {
  render() {
    return (
      <TouchableOpacity
        style={[styles.touchableOpacityStyleButton, this.props.styleButton]}
        onPress={this.props.onPress}>
        <Text style={styles.textStyleButton}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default FilledButton;
