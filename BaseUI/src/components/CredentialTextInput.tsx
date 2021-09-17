import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';

export interface CredentialTextInputProps {
  placeholder: string;
  secureTextEntry: boolean;
  value?: string;
  isEditable?: boolean;
  onChangeText?: (text: string) => void;
}

class CredentialTextInput extends Component<CredentialTextInputProps> {
  render() {
    return (
      <TextInput
        onChangeText={this.props.onChangeText}
        value={this.props.value}
        style={styles.textInputStyle}
        placeholder={this.props.placeholder}
        placeholderTextColor="#a9a9a9"
        secureTextEntry={this.props.secureTextEntry}
        editable={this.props.isEditable}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    borderBottomWidth: 1,
    borderColor: 'rgb(181, 182, 221)',
    width: '100%',
    fontSize: 15,
    paddingVertical: 8,
  },
});

export default CredentialTextInput;
