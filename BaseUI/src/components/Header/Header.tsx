import React, {Component} from 'react';
import {View, Text} from 'react-native';
import TextButton from '../TextButton/TextButton';
import styles from './styles';

export interface HeaderProps {
  isEditMode: boolean;
  titleButton?: string;
  title?: string;
  containerStyle: object;
  labelStyle: object;
  onPress?: () => void;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <View style={styles.viewHead}>
        <View style={styles.containerViewText}>
          <Text style={styles.viewText}>{this.props.title}</Text>
        </View>
        <View style={styles.editButton}>
          {this.props.isEditMode ? null : (
            <TextButton
              title={this.props.titleButton}
              containerStyle={this.props.containerStyle}
              labelStyle={this.props.labelStyle}
              onPress={this.props.onPress}
            />
          )}
        </View>
      </View>
    );
  }
}

export default Header;
