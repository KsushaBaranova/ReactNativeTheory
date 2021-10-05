import {ImageSourcePropType, TextStyle, ViewStyle} from 'react-native';

export interface AddPeopleItem extends Omit<SubscriberItem, 'isFollowing'> {
  id?: string;
  isAddUser: boolean | undefined;
}

export interface Section {
  title: string;
  data: AddPeopleItem[];
}

export interface LoginScreenState {
  email: string;
  password: string;
}

export interface ProfileScreenState {
  userName: string;
  email: string;
  image: object;
  followers: number;
  following: number;
  isEditMode: boolean;
  isKeyboardOpen: boolean;
  errorMessage: string;
}

export interface SubscriberItem {
  image: ImageSourcePropType;
  title: string;
  description: string;
  isFollowing?: boolean;
}

export interface AvatarProps {
  avatar: object;
  onPress?: () => void;
  isEditMode: boolean;
}

export interface BackgroundFormProps {
  isEditMode?: boolean;
  titleButton?: string;
  title?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  onPress?: () => void;
  styleHeight?: ViewStyle;
  prepearComponent?: JSX.Element;
}

export interface CredentialTextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  isEditable?: boolean;
  onChangeText?: (text: string) => void;
}

export interface FilledButtonProps {
  title?: string;
  onPress?: () => void;
  styleButton?: object;
  styleText?: TextStyle;
}

export interface FollowBlockProps {
  followers: number;
  following: number;
}

export interface HeaderProps {
  isEditMode?: boolean;
  titleButton?: string;
  title?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  onPress?: () => void;
  prepearComponent?: JSX.Element;
}

export interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export interface SocialNetworkButtonProps {
  image: ImageSourcePropType;
}

export interface TextButtonProps {
  title?: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  onPress?: () => void;
}

export interface SubscriberCellPros {
  subscriber: SubscriberItem;
}
