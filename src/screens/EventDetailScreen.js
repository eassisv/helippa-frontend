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
    return (
      <View style={styles.container}>
        <LoadingImage source={picture} width={width} height={height} />
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
