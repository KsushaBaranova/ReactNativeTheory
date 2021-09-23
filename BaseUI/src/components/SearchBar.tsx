import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: 'white',
    height: 40,
    width: '90%',
    paddingLeft: 25,
    borderRadius: 20,
    marginBottom: 20,
  },
});

export default SearchBar;
