import {createAsyncThunk} from '@reduxjs/toolkit';
import {PhotoModel} from '../../../interfaces/interfaces';
import {imageApi} from '../../../services/ImageApi';

export const unlikePhoto = createAsyncThunk<PhotoModel, string[]>(
  'photos/unlikePhoto',
  async (userID, thunkApi) => {
    try {
      const response = await imageApi.unlikePhoto(userID);

      return {
        id: response.photo.id,
        isLiked: response.photo.liked_by_user,
        likesCount: response.photo.likes,
      };
    } catch (error) {
      console.log('unlikePhotos error: ', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
