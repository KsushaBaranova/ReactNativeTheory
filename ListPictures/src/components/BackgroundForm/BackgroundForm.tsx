import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Stack} from 'react-native-spacing-system';
import {BackgroundFormProps} from '../../interfaces/interfaces';
import styles from './styles';

class BackgroundForm extends Component<BackgroundFormProps> {
  render() {
    return (
      <View
        style={[
          styles.backgroundStyle,
          {backgroundColor: this.props.backgroundColor},
        ]}>
        <Stack size={45} />
        <View style={styles.viewTextStyle}>
          <Text style={styles.textStyle}>{this.props.headerProps.title}</Text>
        </View>
        <Stack size={15} />
        <View style={this.props.additionViewStyle}>{this.props.children}</View>
      </View>
    );
  }
}

export default BackgroundForm;
