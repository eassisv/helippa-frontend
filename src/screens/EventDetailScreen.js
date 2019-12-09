import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import EventItem from '../components/EventItem';
import EventDetailImage from '../components/EventDetailImage';

const EventDetailScreen = ({navigation}) => {
  const event = {
    title: 'Evadfasdf',
    image: 'https://picsum.photos/id/300/300/200',
  };
  return (
    <View style={{flex: 1}}>
      <EventDetailImage event={event} />
      <TouchableOpacity
        onPress={async () => {
          try {
            await AsyncStorage.multiRemove(['apiToken', 'fbToken']);
          } catch (e) {
            console.log(e);
          }
          navigation.navigate('LoginScreen');
        }}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventDetailScreen;
