import React, {useState} from 'react';
import CredentialTextInput from '../../components/CredentialTextInput/CredentialTextInput';
import FilledButton from '../../components/FilledButton/FilledButton';
import SocialNetworkButtonsForm from '../../components/SocialNetworkButtonsForm/SocialNetworkButtonsForm';
import TextButton from '../../components/TextButton/TextButton';
import {Stack} from 'react-native-spacing-system';
import BackgroundForm from '../../components/BackgroundForm/BackgroundForm';
import styles from '../../components/BackgroundForm/styles';
import {Text} from 'react-native';
import useDeviceOrientation from '../../hooks/useDeviceOrientation';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const orientation = useDeviceOrientation();

  return (
    <BackgroundForm>
      <CredentialTextInput
        placeholder={'Email'}
        secureTextEntry={false}
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <Stack size={15} />
      <CredentialTextInput
        placeholder={'Password'}
        secureTextEntry={true}
        value={password}
        onChangeText={password => setPassword(password)}
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
          console.log('"Sing in" button was pressed', email, password)
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
};

export default LoginScreen;
