import {createAsyncThunk} from '@reduxjs/toolkit';
import {PhotoModel} from '../../../interfaces/interfaces';
import {imageApi} from '../../../services/ImageApi';

export const likePhoto = createAsyncThunk<PhotoModel, string[]>(
  'photos/likePhoto',
  async (userID, thunkApi) => {
    try {
      const response = await imageApi.likePhoto(userID);

      return {
        id: response.photo.id,
        isLiked: response.photo.liked_by_user,
        likesCount: response.photo.likes,
      };
    } catch (error) {
      console.log('likePhotos error: ', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
