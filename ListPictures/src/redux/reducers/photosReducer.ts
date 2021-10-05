import {createSlice} from '@reduxjs/toolkit';
import {PhotosState} from '../../interfaces/interfaces';
import {fetchPhotos} from '../actions/async/fetchPhotos';
import {likePhoto} from '../actions/async/likePhoto';
import {searchPhotos} from '../actions/async/searchPhotos';
import {unlikePhoto} from '../actions/async/unlikePhoto';

const initialState: PhotosState = {items: [], loading: false, error: null};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    emptyList: state => {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(likePhoto.fulfilled, (state, action) => {
      let getData = state.items.find(item => item.id === action.payload.id);
      getData
        ? ((getData.isLiked = action.payload.isLiked),
          (getData.likesCount = action.payload.likesCount))
        : state;
    });
    builder.addCase(unlikePhoto.fulfilled, (state, action) => {
      let getData = state.items.find(item => item.id === action.payload.id);
      getData
        ? ((getData.isLiked = action.payload.isLiked),
          (getData.likesCount = action.payload.likesCount))
        : state;
    });
    builder.addCase(searchPhotos.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const {emptyList} = photosSlice.actions;
export default photosSlice.reducer;
