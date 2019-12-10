import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LoadingImage from '../components/LoadingImage';

const {width} = Dimensions.get('window');
const height = Math.round(width * (2 / 3));

export default class EventDetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {picture} = this.props.navigation.state.params.event;
    const image = picture ? `http://ddea6d0e.ngrok.io/${picture}` : '';
    return (
      <View style={styles.container}>
        <LoadingImage source={image} width={width} height={height} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
