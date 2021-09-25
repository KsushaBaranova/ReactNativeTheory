import React, {Component} from 'react';
import {View, Text, ViewStyle, TextStyle} from 'react-native';
import TextButton from '../TextButton/TextButton';
import styles from './styles';
import SearchBar from '../SearchBar/SearchBar';

export interface HeaderProps {
  isEditMode?: boolean;
  titleButton?: string;
  title?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  onPress?: () => void;
  prepearComponent?: JSX.Element;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <View>
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
        <View style={styles.viewSearchBarStyle}>
          {this.props.prepearComponent}
        </View>
      </View>
    );
  }
}

export default Header;
