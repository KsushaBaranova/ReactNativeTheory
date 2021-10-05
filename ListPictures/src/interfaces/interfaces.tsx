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

export type ImageCellFooterProps = {
  isLiked?: boolean;
  likes: number | undefined;
  likeFoto?: () => void;
};

export type PhotoDataResponse = {
  photo: LikeDataResponse;
  id: string;
  liked_by_user: boolean;
  likes: number;
  user?: {name: string; profile_image?: {small?: string}};
  urls?: {small: string};
};

export type LikeDataResponse = {
  id: string;
  liked_by_user: boolean;
  likes: number;
};

export interface ImageApiInterface<T> {
  fetchPhotos(): Promise<Array<T>>;
  likePhoto(id: string): Promise<T>;
  unlikePhoto(id: string): Promise<T>;
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
