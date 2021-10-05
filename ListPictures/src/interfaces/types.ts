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

export type DropdownProps = {
  value: string;
  setValue: (value: string) => void;
  onChangeValue: (value: any) => void;
};

export type PhotoDataResponse = {
  photo: LikeDataResponse;
  id: string;
  liked_by_user: boolean;
  likes: number;
  user?: {name: string; profile_image?: {small?: string}};
  urls?: {small: string};
};

export type SearchDataResponse = {
  results: Array<PhotoDataResponse>;
};

export type LikeDataResponse = {
  id: string;
  liked_by_user: boolean;
  likes: number;
};

export type PhotoLikeResponse<T> = {
  photo: T;
};
