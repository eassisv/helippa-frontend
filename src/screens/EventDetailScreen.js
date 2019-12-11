import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LoadingImage from '../components/LoadingImage';
import HomeHeader from '../components/HomeHeader';

const url = require('../../backendroute').default.baseUrl;

const {width} = Dimensions.get('window');
const height = Math.round(width * (2 / 3));

export default class EventDetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  twoDigits(num) {
    return num > 9 ? `${num}` : `0${num}`;
  }

  dateString(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  timeString(date) {
    const hours = this.twoDigits(date.getHours());
    const minutes = this.twoDigits(date.getMinutes());
    return `${hours}:${minutes}`;
  }

  render() {
    const {
      picture,
      name,
      date,
      description,
    } = this.props.navigation.state.params.event;
    const dateObj = new Date(date);
    const image = picture ? `${url}${picture}` : '';
    return (
      <View style={styles.container}>
        <HomeHeader
          onPressLogo={() => this.props.navigation.goBack()}
          onPressMenu={() => this.props.navigation.openDrawer()}
        />
        <View>
          <LoadingImage source={image} width={width} height={height} />

          <Text style={styles.title}>{name}</Text>
          <View style={styles.descBoxContainer}>
            <View style={styles.descBox}>
              <Text style={styles.descTitle}>Descrição</Text>
              <Text style={styles.desc}>{description}</Text>
            </View>
          </View>
          <View style={styles.descBoxContainer}>
            <View style={styles.descBox}>
              <Text style={styles.descTitle}>Evento ocorre em</Text>
              <Text style={styles.desc}>
                {this.dateString(dateObj)} às {this.timeString(dateObj)}
              </Text>
            </View>
          </View>
        </View>
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
  title: {
    fontSize: 30,
    fontWeight: '700',
    padding: 15,
  },
  descTitle: {
    fontSize: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  desc: {
    paddingHorizontal: 15,
  },
  descBox: {
    padding: 15,
    elevation: 3,
    backgroundColor: 'white',
    // backgroundColor: 'red',
  },
  descBoxContainer: {
    padding: 15,
  },
});
