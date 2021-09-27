import React, {Component} from 'react';
import CredentialTextInput from '../../components/CredentialTextInput/CredentialTextInput';
import FilledButton from '../../components/FilledButton/FilledButton';
import SocialNetworkButtonsForm from '../../components/SocialNetworkButtonsForm/SocialNetworkButtonsForm';
import TextButton from '../../components/TextButton/TextButton';
import {Stack} from 'react-native-spacing-system';
import BackgroundForm from '../../components/BackgroundForm/BackgroundForm';
import styles from '../../components/BackgroundForm/styles';
import {Text} from 'react-native';
import {LoginScreenState} from '../../intrfaces';

class LoginScreen extends Component<{}, LoginScreenState> {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <BackgroundForm>
        <CredentialTextInput
          placeholder={'Email'}
          secureTextEntry={false}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />
        <Stack size={15} />
        <CredentialTextInput
          placeholder={'Password'}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
        <Stack size={30} />
        <TextButton
          title="Forget password?"
          containerStyle={styles.containerStylePassword}
          labelStyle={styles.labelStylePassword}
        />
        <Stack size={40} />
        <FilledButton
          title={'Sing in'}
          onPress={() =>
            console.log('"Sing in" button was pressed', this.state)
          }
        />
        <Stack size={18} />
        <Text style={styles.orSignWithTextStyle}>or sign with</Text>
        <Stack size={18} />
        <SocialNetworkButtonsForm />
        <Stack size={30} />
        <TextButton
          title="Don't have an account?"
          containerStyle={styles.containerStyleAccount}
          labelStyle={styles.labelStyleAccount}
        />
      </BackgroundForm>
    );
  }
}

export default LoginScreen;
