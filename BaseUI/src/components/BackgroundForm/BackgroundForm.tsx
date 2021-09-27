import React, {Component} from 'react';
import {View, ImageBackground, KeyboardAvoidingView} from 'react-native';
import {BackgroundFormProps} from '../../intrfaces';
import Header from '../Header/Header';
import styles from './styles';

const image = {
  uri: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
};

class BackgroundForm extends Component<BackgroundFormProps> {
  render() {
    return (
      <ImageBackground source={image} style={styles.backgroundImageStyle}>
        <Header
          isEditMode={this.props.isEditMode}
          titleButton={this.props.titleButton}
          title={this.props.title}
          containerStyle={this.props.containerStyle}
          labelStyle={this.props.labelStyle}
          onPress={this.props.onPress}
          prepearComponent={this.props.prepearComponent}
        />

        <KeyboardAvoidingView
          style={styles.backgroundImageStyle}
          behavior={'padding'}>
          <View style={[styles.viewStyle, this.props.styleHeight]}>
            {this.props.children}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export default BackgroundForm;
