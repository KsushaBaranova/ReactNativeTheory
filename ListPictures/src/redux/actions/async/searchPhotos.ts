import {createAsyncThunk} from '@reduxjs/toolkit';
import {PhotoModel} from '../../../interfaces/interfaces';
import {searchApi} from '../../../services/ImageApi';

export const searchPhotos = createAsyncThunk<Array<PhotoModel>, string>(
  'photos/searchPhotos',
  async (inputValue, thunkApi) => {
    const query = {query: inputValue};

    try {
      const {results} = await searchApi.searchPhotos(query);

      return results.map(item => ({
        id: item.id,
        imageUrl: item.urls?.small,
        isLiked: item.liked_by_user,
        profileImageUrl: item.user?.profile_image?.small,
        name: item.user?.name,
        likesCount: item.likes,
      }));
    } catch (error) {
      console.log('searchPhotos error: ', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
