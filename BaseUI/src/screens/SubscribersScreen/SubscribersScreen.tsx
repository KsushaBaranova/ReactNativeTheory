import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {ImageSourcePropType} from 'react-native';
import BackgroundForm from '../../components/BackgroundForm/BackgroundForm';
import FilledButton from '../../components/FilledButton/FilledButton';
import SubscriberCell from '../../components/SubscriberCell/SubscriberCell';
import styles from './styles';

export interface SubscriberItem {
  id?: string;
  image: ImageSourcePropType;
  title: string;
  description: string;
  isFollowing?: boolean;
}

function SubscribersScreen() {
  const [subscribers, setSubscribers] = useState<SubscriberItem[]>([
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      },
      title: 'First user',
      description: 'Description...',
      isFollowing: false,
    },
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      },
      title: 'Second user',
      description: 'Description...',
      isFollowing: true,
    },
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      },
      title: 'Third user',
      description: 'Description...',
      isFollowing: false,
    },
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      },
      title: 'Fours user',
      description: 'Description...',
      isFollowing: true,
    },
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      },
      title: 'First user',
      description: 'Description...',
      isFollowing: false,
    },
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      },
      title: 'Second user',
      description: 'Description...',
      isFollowing: true,
    },
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      },
      title: 'Third user',
      description: 'Description...',
      isFollowing: false,
    },
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      },
      title: 'Fousad user',
      description: 'Description...',
      isFollowing: true,
    },
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      },
      title: 'First user',
      description: 'Description...',
      isFollowing: false,
    },
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      },
      title: 'Second user',
      description: 'Description...',
      isFollowing: true,
    },
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      },
      title: 'Third user',
      description: 'Description...',
      isFollowing: false,
    },
    {
      image: {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
      },
      title: 'Fours user',
      description: 'Description...',
      isFollowing: true,
    },
  ]);

  const renderItem = (itemProps: ListRenderItemInfo<SubscriberItem>) => {
    return (
      <View>
        <SubscriberCell subscriber={itemProps.item}>
          <FilledButton
            title={itemProps.item.isFollowing ? 'Following' : 'Follow'}
            styleButton={[
              styles.filledButtonStyle,
              itemProps.item.isFollowing
                ? styles.followingButtonBackgroundStyle
                : styles.followButtonBackgroundStyle,
            ]}
            styleText={
              itemProps.item.isFollowing
                ? styles.followingButtonTextStyle
                : styles.followButtonTextStyle
            }
            onPress={() => {
              let subscribersCopy = [...subscribers];
              subscribersCopy[itemProps.index].isFollowing =
                !itemProps.item.isFollowing;
              setSubscribers(subscribersCopy);
            }}
          />
        </SubscriberCell>
      </View>
    );
  };

  return (
    <BackgroundForm title={'Subscribers'} styleHeight={styles.backgroundStyle}>
      <FlatList
        style={styles.flatListStyle}
        renderItem={renderItem}
        data={subscribers}
      />
    </BackgroundForm>
  );
}

export default SubscribersScreen;
