import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {Stack} from 'react-native-spacing-system';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import ImageCell from '../components/ImageCell/ImageCell';
import {
  ImageApi,
  ImageApiInterface,
  PhotoDataResponse,
} from '../services/ImageApi';
import styles from './styles';

type PhotoModel = {
  id: string;
  imageUrl?: string;
  profileImageUrl?: string;
  name?: string;
  likesCount?: number;
  isLiked: boolean;
};

export interface ImageScreenState {
  images: Array<PhotoModel>;
  imageApi: ImageApiInterface<PhotoDataResponse>;
}

const ImagesScreen = () => {
  const [images, setImages] = useState([] as PhotoModel[]);
  const [imageApi, setImageApi] = useState(new ImageApi<PhotoDataResponse>());

  useEffect(() => {
    imageApi
      .fetchPhotos()
      .then(values => {
        setImages(
          values.map(value => ({
            id: value.id,
            imageUrl: value.urls?.small,
            isLiked: value.liked_by_user,
            profileImageUrl: value.user?.profile_image?.small,
            name: value.user?.name,
            likesCount: value.likes,
          })),
        );
      })
      .catch(error => {
        console.log('fetch error: ', error);
      });
  });

  const like = (id: string) => {
    imageApi
      .likePhoto(id)
      .then((value: PhotoDataResponse) => {
        const updatedImages = images.map(user => {
          if (user.id === id) {
            return (user = {
              id: user.id,
              imageUrl: user.imageUrl,
              name: user.name,
              profileImageUrl: user.profileImageUrl,
              isLiked: value.liked_by_user,
              likesCount: value.likes,
            });
          } else {
            return user;
          }
        });

        setImages(updatedImages);
      })
      .catch(error => console.log(error));
  };

  const unlike = (id: string) => {
    imageApi
      .unlikePhoto(id)
      .then((value: PhotoDataResponse) => {
        const updatedImages = images.map(user => {
          if (user.id === id) {
            return (user = {
              id: user.id,
              imageUrl: user.imageUrl,
              name: user.name,
              profileImageUrl: user.profileImageUrl,
              isLiked: value.liked_by_user,
              likesCount: value.likes,
            });
          } else {
            return user;
          }
        });

        setImages(updatedImages);
      })
      .catch(error => console.log(error));
  };

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
            item.isLiked ? unlike(item.id) : like(item.id);
          }}
        />
      </View>
    );
  };

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyContainerStyle}>
        <Text style={styles.emptyTextStyle}>No images yet</Text>
      </View>
    );
  };

  const ItemSeparatorComponent = () => {
    return <Stack size={20} />;
  };

  return (
    <BackgroundForm
      additionViewStyle={styles.additionViewStyle}
      backgroundColor={'darkslategrey'}
      headerProps={{
        title: 'Images',
      }}>
      <FlatList<PhotoModel>
        keyExtractor={(_, index) => String(index)}
        style={styles.flatListStyle}
        data={images}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </BackgroundForm>
  );
};

export default ImagesScreen;
