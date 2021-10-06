/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {
  ListRenderItemInfo,
  SectionList,
  SectionListData,
  Text,
  View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BackgroundForm from '../../components/BackgroundForm/BackgroundForm';
import SearchBar from '../../components/SearchBar/SearchBar';
import SubscriberCell from '../../components/SubscriberCell/SubscriberCell';
import {arrayWithPeople} from '../../data';
import {AddPeopleItem, Section} from '../../intrfaces';
import styles from './styles';

const AddPeopleScreen = () => {
  const divideIntoSection = (list: Array<AddPeopleItem>): Section[] => {
    let listWithSection: Section[] = [];
    list.forEach(obj => {
      let firstLetter = obj.title[0].toUpperCase();
      let isHave: boolean = false;
      listWithSection.forEach(section => {
        if (section.title === firstLetter) {
          isHave = true;
          section.data.push(obj);
          sortByLetter(section.data);
        }
      });
      if (!isHave) {
        listWithSection.push({title: firstLetter, data: [obj]});
      }
    });
    sortByLetter(listWithSection);
    return listWithSection;
  };

  const sortByLetter = (array: Section[] | Array<AddPeopleItem>) => {
    array.sort((a, b) => (a.title > b.title ? 1 : -1));
  };

  const [people, setPeople] = useState<Section[]>(() =>
    divideIntoSection(arrayWithPeople),
  );
  const [filteredPeople, setFilteredPeople] = useState<Section[]>(people);
  const [inputValue, setInputValue] = useState<string>('');

  const toggleCheckBox = (
    isChecked: boolean | undefined,
    section: ListRenderItemInfo<AddPeopleItem>,
  ): void => {
    let usersCopy = [...people];
    usersCopy[section.index].data.find(item => {
      if (item.id === section.item.id) {
        item.isAddUser = isChecked;
      }
    });
    setPeople(usersCopy);
  };

  const renderItem = (itemProps: ListRenderItemInfo<AddPeopleItem>) => {
    return (
      <View>
        <SubscriberCell subscriber={itemProps.item}>
          <BouncyCheckbox
            fillColor="rgb(64, 80, 164)"
            onPress={(isChecked: boolean | undefined) => {
              toggleCheckBox(isChecked, itemProps);
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
    return <Text style={styles.headerStyle}>{title}</Text>;
  };

  const onChangeValue = (text: string): void => {
    let inputText = text.toLowerCase();
    setInputValue(text);

    const newListPeople: Section[] = [];
    people.forEach(section => {
      let filteredData = section.data.filter(person =>
        person.title.toLowerCase().includes(inputText),
      );
      if (filteredData.length !== 0) {
        newListPeople.push({title: section.title, data: filteredData});
      }
    });
    useFilterPeople(newListPeople);
  };

  const useFilterPeople = (peopleList: Section[]) => {
    setTimeout(() => setFilteredPeople(peopleList), 2000);
  };

  return (
    <BackgroundForm
      title={'Add people'}
      styleHeight={styles.backgroundStyle}
      prepearComponent={
        <SearchBar value={inputValue} onChangeText={onChangeValue} />
      }>
      <SectionList
        style={styles.flatListStyle}
        sections={filteredPeople}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        ListEmptyComponent={
          <Text style={styles.emptyListStyle}>Nothing found</Text>
        }
      />
    </BackgroundForm>
  );
};

export default AddPeopleScreen;
