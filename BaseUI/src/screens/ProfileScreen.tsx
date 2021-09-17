import React, {Component} from 'react';
import BackgroundForm from '../components/BackgroundForm';
import CredentialTextInput from '../components/CredentialTextInput';
import FilledButton from '../components/FilledButton';
import {Stack} from 'react-native-spacing-system';
import Avatar from '../components/Avatar';
import ImagePicker from 'react-native-image-crop-picker';
import FollowBlock from '../components/FollowBlock';
import {EmitterSubscription, Keyboard, StyleSheet, View} from 'react-native';

interface ProfileScreenState {
  userName: string;
  email: string;
  image: object;
  followers: number;
  following: number;
  isEditMode: boolean;
  isKeyboardOpen: boolean;
}

class ProfileScreen extends Component<{}, ProfileScreenState> {
  state = {
    userName: '',
    email: '',
    image: {
      uri: '/Users/student/Desktop/ReactNative/BaseUI/src/images/profile.png',
    },
    followers: 250,
    following: 1236,
    isEditMode: false,
    isKeyboardOpen: false,
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

  onOrOffEditMode = () => {
    this.setState({isEditMode: !this.state.isEditMode});
  };

  updateInfo = () => {
    this.setState({
      userName: this.state.userName,
      email: this.state.email,
      image: this.state.image,
    });

    this.onOrOffEditMode();
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
        titleButton={this.state.isEditMode ? '' : 'Edit'}
        color={'white'}
        align={'flex-end'}
        fontSize={15}
        onPress={this.onOrOffEditMode}
        styleHeight={styleProps.forBackground}>
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

        {this.state.isEditMode ? (
          <FilledButton
            styleButton={{
              marginTop: this.state.isKeyboardOpen ? '20%' : '110%',
            }}
            title={'Update profile'}
            onPress={this.updateInfo}
          />
        ) : (
          <FilledButton
            styleButton={styleProps.forFailetButton}
            title={'Show state'}
            onPress={() => console.log(this.state)}
          />
        )}

        <Stack size={30} />
      </BackgroundForm>
    );
  }
}

const styleProps = StyleSheet.create({
  forBackground: {
    height: '100%',
  },
  forFailetButton: {
    marginTop: '75%',
  },
});

export default ProfileScreen;
