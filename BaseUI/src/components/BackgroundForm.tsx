import React, {Component} from 'react';
import {View, ImageBackground, KeyboardAvoidingView, Text} from 'react-native';
import TextButton from './TextButton';
import styles from '../styles/BackgroundForm';

const image = {
  uri: 'https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
};

export interface BackgroundFormProps {
  titleButton?: string;
  title?: string;
  align?: 'flex-start' | 'center' | 'flex-end';
  color?: string;
  fontSize?: number;
  onPress?: () => void;
  styleHeight?: object;
}

class BackgroundForm extends Component<BackgroundFormProps> {
  render() {
    return (
      <ImageBackground source={image} style={styles.backgroundImageStyle}>
        <View style={styles.viewHead}>
          <Text style={styles.viewText}>{this.props.title}</Text>
          <View style={styles.editButton}>
            <TextButton
              fontSize={16}
              title={this.props.titleButton}
              color={this.props.color}
              align={this.props.align}
              onPress={this.props.onPress}
            />
          </View>
        </View>

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
