import React, {Component} from 'react';
import {TextInput} from 'react-native';
import {CredentialTextInputProps} from '../../intrfaces';
import styles from './styles';

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

export default CredentialTextInput;
