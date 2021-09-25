import {useWindowDimensions} from 'react-native';

export enum OrientationType {
  portrait = 'portrait',
  landscape = 'landscape',
}

const getCurrentOrientationType = (width: number, height: number) => {
  return height > width ? OrientationType.portrait : OrientationType.landscape;
};

export default function useDeviceOrientation() {
  const window = useWindowDimensions();
  return getCurrentOrientationType(window.width, window.height);
}
