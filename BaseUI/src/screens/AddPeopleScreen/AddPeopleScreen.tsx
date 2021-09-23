import React, {useState} from 'react';
import {
  ListRenderItemInfo,
  SectionList,
  SectionListData,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BackgroundForm from '../../components/BackgroundForm/BackgroundForm';
import SearchBar from '../../components/SearchBar';
import SubscriberCell from '../../components/SubscriberCell/SubscriberCell';
import styles from '../ProfileScreen/styles';
import {SubscriberItem} from '../SubscribersScreen/SubscribersScreen';

export interface AddPeopleItem extends Omit<SubscriberItem, 'isFollowing'> {
  isAddUser: boolean | undefined;
}

export interface AddPeopleState {
  id?: string;
  title: string;
  data: AddPeopleItem[];
}

function AddPeopleScreen() {
  const [people, setPeople] = useState<AddPeopleState[]>([
    {
      id: '1',
      title: 'A',
      data: [
        {
          id: 'A1',
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
          },
          title: 'Anna',
          description: 'Description...',
          isAddUser: false,
        },
        {
          id: 'A2',
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
          },
          title: 'Andrey',
          description: 'Description...',
          isAddUser: true,
        },
      ],
    },

    {
      id: '2',
      title: 'B',
      data: [
        {
          id: 'B1',
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
          },
          title: 'Ben',
          description: 'Description...',
          isAddUser: false,
        },
        {
          id: 'B2',
          image: {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
          },
          title: 'Bonny',
          description: 'Description...',
          isAddUser: true,
        },
      ],
    },
  ]);

  const [filteredPeople, setFilteredPeople] = useState<AddPeopleState[]>([]);
  const [inputValue, setInputValue] = useState('');

  const renderItem = (itemProps: ListRenderItemInfo<AddPeopleItem>) => {
    return (
      <View>
        <SubscriberCell subscriber={itemProps.item}>
          <BouncyCheckbox
            fillColor="rgb(64, 80, 164)"
            onPress={(isChecked: boolean | undefined) => {
              let usersCopy = [...people];
              usersCopy[itemProps.index].data.find(item => {
                if (item.id === itemProps.item.id) {
                  item.isAddUser = isChecked;
                }
              });
              setPeople(usersCopy);
            }}
          />
        </SubscriberCell>
      </View>
    );
  };

  const renderHeader = ({
    section: {title},
  }: {
    section: SectionListData<AddPeopleItem>;
  }) => {
    return <Text>{title}</Text>;
  };

  const onChangeValue = (value: string) => {};

  return (
    <BackgroundForm
      title={'Add people'}
      styleHeight={styles.backgroundStyle}
      prepearComponent={
        <SearchBar value={inputValue} onChangeText={onChangeValue} />
      }>
      <SectionList
        style={styles1.flatListStyle}
        sections={people}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
      />
    </BackgroundForm>
  );
}

const styles1 = StyleSheet.create({
  flatListStyle: {
    flex: 1,
    width: '100%',
  },
});

export default AddPeopleScreen;
