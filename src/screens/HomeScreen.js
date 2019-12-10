import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, ActivityIndicator} from 'react-native';
import axios from 'axios';
import HomeHeader from '../components/HomeHeader';
import HomeListHeader from '../components/HomeListHeader';
import EventList from '../components/EventList';

const width = Dimensions.get('window').width - 30; // -30 because of padding
const height = Math.round(width * (2 / 3));

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: true, events: []};
    this.flatList = React.createRef();
  }

  async getEvents() {
    try {
      const res = await axios.get('http://ddea6d0e.ngrok.io/api/event');
      console.log(res.data);
      this.setState({events: res.data, loading: false});
      console.log('events:', this.state.events);
    } catch (error) {
      console.log('error:', error);
    }
  }

  async componentDidMount() {
    await this.getEvents();
  }

  scrollToTop() {
    this.flatList.current.scrollToOffset({
      offset: 0,
      animated: true,
    });
  }

  openEvent(event) {
    this.props.navigation.push('EventDetailScreen', {event});
  }

  render() {
    const {navigation} = this.props;
    const {loading, events} = this.state;
    return (
      <View style={styles.container}>
        <HomeHeader
          onPressLogo={() => this.scrollToTop()}
          onPressMenu={() => navigation.openDrawer()}
        />
        {loading ? (
          <View style={styles.indicatorWrapper}>
            <ActivityIndicator size="large" color="darkcyan" />
          </View>
        ) : (
          <View style={styles.container}>
            <EventList
              events={events}
              ListHeaderComponent={<HomeListHeader navigation={navigation} />}
              eventWidth={width}
              eventHeight={height}
              eventFontSize={16}
              onEventPressed={event => this.openEvent(event)}
              ref={this.flatList}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  indicatorWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
