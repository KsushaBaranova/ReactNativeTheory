import {createAsyncThunk} from '@reduxjs/toolkit';
import {PhotoModel} from '../../../interfaces/interfaces';
import {imageApi} from '../../../services/ImageApi';

export const fetchPhotos = createAsyncThunk<Array<PhotoModel>, string>(
  'photos/fetchPhotos',
  async (orderBy, thunkApi) => {
    try {
      let objOrderBy: object = orderBy
        ? {order_by: orderBy}
        : {order_by: 'latest'};

      const response = await imageApi.fetchPhotos(objOrderBy);

      return response.map(item => ({
        id: item.id,
        imageUrl: item.urls?.small,
        isLiked: item.liked_by_user,
        profileImageUrl: item.user?.profile_image?.small,
        name: item.user?.name,
        likesCount: item.likes,
      }));
    } catch (error) {
      console.log('fetchPhotos error: ', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
