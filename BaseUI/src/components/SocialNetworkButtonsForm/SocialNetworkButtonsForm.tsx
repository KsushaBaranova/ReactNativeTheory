import React, {Component} from 'react';
import {Platform, View} from 'react-native';
import SocialNetworkButton from '../SocialNetworkButton/SocialNetworkButton';
import {Queue} from 'react-native-spacing-system';
import styles from './styles';

class SocialNetworkButtonsForm extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        {Platform.OS === 'ios' && (
          <SocialNetworkButton image={require('../../images/appleIcon.png')} />
        )}
        <Queue size={11} />
        <SocialNetworkButton image={require('../../images/facebookIcon.png')} />
        <Queue size={11} />
        <SocialNetworkButton image={require('../../images/googleIcon.png')} />
      </View>
    );
  }
}

export default SocialNetworkButtonsForm;
