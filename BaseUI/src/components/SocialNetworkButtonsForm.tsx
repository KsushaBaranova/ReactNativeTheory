import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import SocialNetworkButton from './SocialNetworkButton';
import {Queue} from 'react-native-spacing-system';

class SocialNetworkButtonsForm extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        {Platform.OS === 'ios' && (
          <SocialNetworkButton image={require('../images/appleIcon.png')} />
        )}
        <Queue size={11} />
        <SocialNetworkButton image={require('../images/facebookIcon.png')} />
        <Queue size={11} />
        <SocialNetworkButton image={require('../images/googleIcon.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
  },
});

export default SocialNetworkButtonsForm;
