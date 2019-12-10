import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import EventDetailImage from '../components/EventDetailImage';

export default class EventDetailScreen extends React.Component {
  render() {
    console.log(this.props.navigation.state);
    return (
      <View>
        <Text>Detail</Text>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
