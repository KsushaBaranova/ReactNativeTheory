import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {Stack} from 'react-native-spacing-system';
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
import Dropdown from '../components/Dropdown/Dropdown';

const ImagesScreen: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(state => state.photos.items);
  const [inputValue, setInputValue] = useState<string>('');
  const [isFocusOnSearch, setIsFocusOnSearch] = useState<boolean>(false);
  let refreshing: boolean = false;
  let valueInputWithDelay = useDelay(inputValue, 2000);
  const [valueOrderBy, setValueOrderBy] = useState('latest');

  useEffect(() => {
    dispatch(fetchPhotos(valueOrderBy));
  }, [dispatch, valueOrderBy]);

  useEffect(() => {
    dispatch(searchPhotos(valueInputWithDelay));
  }, [dispatch, valueInputWithDelay]);

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

  const onFocus = (): void => {
    setIsFocusOnSearch(true);
    if (isFocusOnSearch === false && inputValue === '') {
      dispatch(emptyList());
    }
  };

  const onBlur = (): void => {
    setIsFocusOnSearch(false);
    if (isFocusOnSearch === true && inputValue === '') {
      dispatch(fetchPhotos(valueOrderBy));
    }
  };

  const onChangeValueSearch = (value: string): void => {
    setInputValue(value);
  };

  const onChangeValueDwopdown = (value: any): void => {
    dispatch(fetchPhotos(value));
  };

  return (
    <BackgroundForm
      additionViewStyle={styles.additionViewStyle}
      backgroundColor={'darkslategrey'}
      headerProps={{
        title: 'Images',
      }}
      prepearComponent={
        <View style={styles.viewPrepearComponent}>
          <Dropdown
            value={valueOrderBy}
            setValue={setValueOrderBy}
            onChangeValue={onChangeValueDwopdown}
          />
          <Stack size={5} />
          <SearchBar
            value={inputValue}
            onChangeText={onChangeValueSearch}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </View>
      }>
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
