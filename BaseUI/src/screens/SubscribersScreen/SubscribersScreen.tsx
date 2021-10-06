import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import BackgroundForm from '../../components/BackgroundForm/BackgroundForm';
import FilledButton from '../../components/FilledButton/FilledButton';
import SubscriberCell from '../../components/SubscriberCell/SubscriberCell';
import {arrayWithSubscribers} from '../../data';
import {SubscriberItem} from '../../intrfaces';
import styles from './styles';

const SubscribersScreen = () => {
  const [subscribers, setSubscribers] =
    useState<SubscriberItem[]>(arrayWithSubscribers);

  const toglleFollowButton = (user: ListRenderItemInfo<SubscriberItem>) => {
    let subscribersCopy = [...subscribers];
    subscribersCopy[user.index].isFollowing = !user.item.isFollowing;
    setSubscribers(subscribersCopy);
  };

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
              toglleFollowButton(itemProps);
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
};

export default SubscribersScreen;
