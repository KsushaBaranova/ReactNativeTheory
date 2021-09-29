import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Stack} from 'react-native-spacing-system';
import styles from './styles';

export interface BackgroundFormProps {
  additionViewStyle: object;
  backgroundColor: string;
  headerProps: {title: string};
}

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
