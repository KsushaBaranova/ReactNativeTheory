/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import BackgroundForm from '../../components/BackgroundForm/BackgroundForm';
import CredentialTextInput from '../../components/CredentialTextInput/CredentialTextInput';
import FilledButton from '../../components/FilledButton/FilledButton';
import {Stack} from 'react-native-spacing-system';
import Avatar from '../../components/Avatar/Avatar';
import ImagePicker from 'react-native-image-crop-picker';
import FollowBlock from '../../components/FollowBlock/FollowBlock';
import {EmitterSubscription, Keyboard, Text, View} from 'react-native';
import styles from './styles';
import styleProps from './styles';
import useEmail from '../../hooks/useEmail';

const ProfileScreen = () => {
  const [userName, setUserName] = useState<string>('');
  const [image, setImage] = useState(require('../../images/profile.png'));
  const [followers, setFollowers] = useState<number>(250);
  const [following, setFollowing] = useState<number>(1236);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false);
  const [email, error, setEmail] = useEmail('');

  let showSubscription!: EmitterSubscription;
  let hideSubscription!: EmitterSubscription;

  useEffect(() => {
    showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  });

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const updateInfo = () => {
    setUserName(userName);
    setEmail(email);
    setImage(image);

    toggleEditMode();
  };

  const chooseAvatar = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(img => {
      let imageNew: any = {...image};
      imageNew.uri = img.sourceURL;
      setImage(imageNew);
    });
  };

  return (
    <BackgroundForm
      title={'My profile'}
      titleButton={'Edit'}
      isEditMode={isEditMode}
      containerStyle={styleProps.containerStyle}
      labelStyle={styleProps.labelStyle}
      onPress={toggleEditMode}
      styleHeight={styles.backgroundStyle}>
      <Avatar avatar={image} onPress={chooseAvatar} isEditMode={isEditMode} />
      <Stack size={30} />

      {isEditMode ? null : (
        <View>
          <FollowBlock followers={followers} following={following} />
          <Stack size={30} />
        </View>
      )}

      <CredentialTextInput
        placeholder={'User name'}
        secureTextEntry={false}
        value={userName}
        isEditable={isEditMode}
        onChangeText={userName => setUserName(userName)}
      />
      <Stack size={15} />
      <CredentialTextInput
        placeholder={'Email'}
        secureTextEntry={false}
        value={email}
        isEditable={isEditMode}
        onChangeText={email => setEmail(email)}
        isError={error !== undefined}
      />
      {isEditMode === true && error !== undefined && (
        <Text style={styles.errorMessage}>{error}</Text>
      )}

      <Stack size={40} />

      <View style={styles.containerForFilledButton}>
        {isEditMode ? (
          <FilledButton
            title={'Update profile'}
            onPress={updateInfo}
            isError={error !== undefined}
          />
        ) : (
          <FilledButton
            styleButton={styles.filledButtonStyle}
            title={'Show state'}
            onPress={() =>
              console.log(
                `User name: ${userName}, 
                email: ${email}, 
                image: ${image.uri}, 
                followers: ${followers}, 
                following: ${following}, 
                error: ${error}`,
              )
            }
          />
        )}
      </View>

      <Stack size={15} />
    </BackgroundForm>
  );
};

export default ProfileScreen;
