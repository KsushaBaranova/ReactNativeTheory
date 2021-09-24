import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

export interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({value, onChangeText}) => {
  return (
    <TextInput
      style={styles.textInputStyle}
      placeholder={'Search people'}
      placeholderTextColor="#a9a9a9"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default SearchBar;
