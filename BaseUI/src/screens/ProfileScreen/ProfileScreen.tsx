import React, {Component} from 'react';
import BackgroundForm from '../../components/BackgroundForm/BackgroundForm';
import CredentialTextInput from '../../components/CredentialTextInput/CredentialTextInput';
import FilledButton from '../../components/FilledButton/FilledButton';
import {Stack} from 'react-native-spacing-system';
import Avatar from '../../components/Avatar/Avatar';
import ImagePicker from 'react-native-image-crop-picker';
import FollowBlock from '../../components/FollowBlock/FollowBlock';
import {EmitterSubscription, Keyboard, View} from 'react-native';
import styles from './styles';
import styleProps from './styles';

interface ProfileScreenState {
  userName: string;
  email: string;
  image: object;
  followers: number;
  following: number;
  isEditMode: boolean;
  isKeyboardOpen: boolean;
  errorMessage: string;
}

class ProfileScreen extends Component<{}, ProfileScreenState> {
  state = {
    userName: '',
    email: '',
    image: require('../../images/profile.png'),
    followers: 250,
    following: 1236,
    isEditMode: false,
    isKeyboardOpen: false,
    errorMessage: '',
  };

  showSubscription!: EmitterSubscription;
  hideSubscription!: EmitterSubscription;

  componentDidMount() {
    this.showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      this.setState({isKeyboardOpen: true});
    });
    this.hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      this.setState({isKeyboardOpen: false});
    });
  }

  componentWillUnmount() {
    this.showSubscription.remove();
    this.hideSubscription.remove();
  }

  toggleEditMode = () => {
    this.setState({isEditMode: !this.state.isEditMode});
  };

  updateInfo = () => {
    this.setState({
      userName: this.state.userName,
      email: this.state.email,
      image: this.state.image,
    });

    this.toggleEditMode();
  };

  chooseAvatar = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(img => {
      let image: any = {...this.state.image};
      image.uri = img.sourceURL;
      this.setState({image});
    });
  };

  render() {
    return (
      <BackgroundForm
        title={'My profile'}
        titleButton={'Edit'}
        isEditMode={this.state.isEditMode}
        containerStyle={styleProps.containerStyle}
        labelStyle={styleProps.labelStyle}
        onPress={this.toggleEditMode}
        styleHeight={styles.backgroundStyle}>
        <Avatar
          avatar={this.state.image}
          onPress={this.chooseAvatar}
          isEditMode={this.state.isEditMode}
        />
        <Stack size={30} />

        {this.state.isEditMode ? null : (
          <View>
            <FollowBlock
              followers={this.state.followers}
              following={this.state.following}
            />
            <Stack size={30} />
          </View>
        )}

        <CredentialTextInput
          placeholder={'User name'}
          secureTextEntry={false}
          value={this.state.userName}
          isEditable={this.state.isEditMode}
          onChangeText={userName => this.setState({userName})}
        />
        <Stack size={15} />
        <CredentialTextInput
          placeholder={'Email'}
          secureTextEntry={false}
          value={this.state.email}
          isEditable={this.state.isEditMode}
          onChangeText={email => this.setState({email})}
        />
        <Stack size={40} />

        <View style={styles.containerForFilledButton}>
          {this.state.isEditMode ? (
            <FilledButton title={'Update profile'} onPress={this.updateInfo} />
          ) : (
            <FilledButton
              styleButton={styles.filledButtonStyle}
              title={'Show state'}
              onPress={() => console.log(this.state)}
            />
          )}
        </View>

        <Stack size={15} />
      </BackgroundForm>
    );
  }
}

export default ProfileScreen;
