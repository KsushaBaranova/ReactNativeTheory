import React, {Component} from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

export interface CredentialTextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  isEditable?: boolean;
  onChangeText?: (text: string) => void;
  isError?: boolean;
}

class CredentialTextInput extends Component<CredentialTextInputProps> {
  render() {
    const borderColor =
      this.props.isError === true && this.props.isEditable === true
        ? {borderColor: 'red'}
        : {borderColor: 'rgb(181, 182, 221)'};

    return (
      <TextInput
        onChangeText={this.props.onChangeText}
        value={this.props.value}
        style={[styles.textInputStyle, borderColor]}
        placeholder={this.props.placeholder}
        placeholderTextColor="#a9a9a9"
        secureTextEntry={this.props.secureTextEntry}
        editable={this.props.isEditable}
      />
    );
  }
}

export default CredentialTextInput;
