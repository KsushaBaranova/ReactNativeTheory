import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {Queue, Stack} from 'react-native-spacing-system';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import ImageCell from '../components/ImageCell/ImageCell';
import SearchBar from '../components/SearchBar/SearchBar';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import useDelay from '../hooks/useDelay';
import {PhotoModel} from '../interfaces/interfaces';
import {fetchPhotos} from '../redux/actions/async/fetchPhotos';
import {likePhoto} from '../redux/actions/async/likePhoto';
import {searchPhotos} from '../redux/actions/async/searchPhotos';
import {unlikePhoto} from '../redux/actions/async/unlikePhoto';
import {emptyList} from '../redux/reducers/photosReducer';
import styles from './styles';
import DropDownPicker, {ValueType} from 'react-native-dropdown-picker';

const ImagesScreen: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(state => state.photos.items);
  const [inputValue, setInputValue] = useState<string>('');
  const [isFocusOnSearch, setIsFocusOnSearch] = useState<boolean>(false);
  let refreshing: boolean = false;
  let valueInputWithDelay = useDelay(inputValue, 2000);
  /* 
  useEffect(() => {
    dispatch(fetchPhotos('popular'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchPhotos(valueInputWithDelay));
  }, [dispatch, valueInputWithDelay]); */

  const renderItem = (itemInfo: ListRenderItemInfo<PhotoModel>) => {
    const {item} = itemInfo;
    return (
      <View style={styles.imageContainerStyle}>
        <ImageCell
          imageUrl={item.imageUrl}
          headerProps={{
            profileUrl: item.profileImageUrl,
            authorName: item.name,
          }}
          likes={item.likesCount}
          likeFoto={() => {
            item.isLiked
              ? dispatch(unlikePhoto([item.id]))
              : dispatch(likePhoto([item.id]));
          }}
        />
      </View>
    );
  };

  const ListEmptyComponent = (
    <View style={styles.emptyContainerStyle}>
      <Text style={styles.emptyTextStyle}>No images yet</Text>
    </View>
  );

  const ItemSeparatorComponent = () => <Stack size={20} />;

  const onChangeValueSearch = (text: string): void => {
    setInputValue(text);
  };

  const onFocus = (): void => {
    setIsFocusOnSearch(true);

    console.log('Focus on search bar');
    if (isFocusOnSearch === false && inputValue === '') {
      console.log('empty list');
      dispatch(emptyList());
    }
  };

  const onBlur = (): void => {
    setIsFocusOnSearch(false);

    if (isFocusOnSearch === true && inputValue === '') {
      console.log('Blur on search bar IN IF');
      dispatch(fetchPhotos('popular'));
    }

    console.log('Blur on search bar');
  };

/*   const onChangeValueDwopdown = (value: string): void => {
    dispatch(fetchPhotos(value));
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('latest');
  const [items, setItems] = useState([
    {label: 'latest', value: 'latest'},
    {label: 'oldest', value: 'oldest'},
    {label: 'popular', value: 'popular'},
  ]); */

  return (
    <BackgroundForm
      additionViewStyle={styles.additionViewStyle}
      backgroundColor={'darkslategrey'}
      headerProps={{
        title: 'Images',
      }}
      prepearComponent={
        <SearchBar
          value={inputValue}
          onChangeText={onChangeValueSearch}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      }>
      <View style={styles.viewDropdownStyle}>
        {/*         <ModalDropdown
          defaultValue={'Sort by'}
          style={styles.buttonDwopdownStyle}
          textStyle={styles.textDropdownStyle}
          dropdownStyle={styles.listDropdownStyle}
          dropdownTextStyle={styles.listTextDropdownStyle}
          options={listSortBy}
        /> */}

{/*         <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            zIndex: 1000,
            width: '25%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <DropDownPicker
            value={value}
            items={items}
            open={open}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={value => console.log(value)}
          />
          <Queue size={110} />
        </View> */}
      </View>
      <FlatList<PhotoModel>
        keyExtractor={(_, index) => String(index)}
        style={styles.flatListStyle}
        data={photos}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
        refreshing={refreshing}
        onRefresh={() => fetchPhotos('')}
      />
    </BackgroundForm>
  );
};

export default ImagesScreen;
