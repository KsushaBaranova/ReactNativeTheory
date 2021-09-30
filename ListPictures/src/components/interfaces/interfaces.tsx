import {PhotoDataResponse} from '../../services/ImageApi';

export type PhotoModel = {
  id: string;
  imageUrl?: string;
  profileImageUrl?: string;
  name?: string;
  likesCount?: number;
  isLiked: boolean;
};

export type ImageCellProps = {
  imageUrl?: string;
  headerProps: ImageCellHeaderProps;
  likes?: number | undefined;
  likeFoto?: () => void;
};

export type ImageCellHeaderProps = {
  profileUrl?: string;
  authorName?: string;
};

export type LikesCellProps = {
  isLiked?: boolean;
  likes: number | undefined;
  likeFoto?: () => void;
};

export interface ImageApiInterface<T> {
  fetchPhotos(): Promise<Array<T>>;
}

export interface ImageScreenState {
  images: Array<PhotoModel>;
  imageApi: ImageApiInterface<PhotoDataResponse>;
}

export interface BackgroundFormProps {
  additionViewStyle: object;
  backgroundColor: string;
  headerProps: {title: string};
}
