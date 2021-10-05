import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {DropdownProps} from '../../interfaces/types';
import styles from './style';

const Dropdown: React.FC<DropdownProps> = ({
  value,
  setValue,
  onChangeValue,
}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'latest', value: 'latest'},
    {label: 'oldest', value: 'oldest'},
    {label: 'popular', value: 'popular'},
  ]);

  return (
    <View style={styles.viewDropdownStyle}>
      <DropDownPicker
        value={value}
        items={items}
        open={open}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.containerStyle}
        onChangeValue={onChangeValue}
      />
    </View>
  );
};

export default Dropdown;
