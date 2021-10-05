import {PhotoDataResponse} from './types';

export interface PhotoModel {
  id: string;
  imageUrl?: string;
  isLiked: boolean;
  profileImageUrl?: string;
  name?: string;
  likesCount: number;
}

export interface PhotosState {
  items: Array<PhotoModel>;
  loading: boolean;
  error: string | null;
}

export interface ImageApiInterface<T> {
  fetchPhotos(orderBy: object): Promise<Array<T>>;
  likePhoto(userId: Array<string>): Promise<T>;
  unlikePhoto(userId: Array<string>): Promise<T>;
  searchPhotos(query: object): Promise<T>;
}

export interface ImageScreenState {
  images: Array<PhotoModel>;
  imageApi: ImageApiInterface<PhotoDataResponse>;
}

export interface BackgroundFormProps {
  additionViewStyle: object;
  backgroundColor: string;
  headerProps: {title: string};
  prepearComponent?: JSX.Element;
}

export interface SearchBarProps {
  value: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}
