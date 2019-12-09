import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import HomeListHeader from '../components/HomeLIstHeader';
import EventList from '../components/EventList';

const useds = {};
const random = () => Math.round(Math.random() * 1000);

const getEvent = () => {
  let event;
  do {
    event = random();
  } while (useds[event] !== undefined);
  useds[event] = event;
  return {
    event: `${event}`,
    image: `http://picsum.photos/id/${event}/300/200/`,
    title: `Eventinho ${event}`,
  };
};

const getRandomEvents = () => {
  const events = [];
  for (let i = 0; i < 10; i++) {
    events.push(getEvent());
  }
  return events;
};

const events = getRandomEvents();

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeHeader />
        <View style={styles.container}>
          <EventList
            events={events}
            onEventPressed={event =>
              this.props.navigation.push('EventDetailScreen', {event})
            }
            ListHeaderComponent={<HomeListHeader />}
            eventWidth={300}
            eventHeight={200}
            eventFontSize={16}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
