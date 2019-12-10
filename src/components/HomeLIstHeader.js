import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import EventSearchForm from '../components/EventSearchForm';
import EventList from '../components/EventList';

const {width} = Dimensions.get('window');
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

export class HomeLIstHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <EventSearchForm />
        <View style={styles.eventsWrapper}>
          <EventList
            events={events}
            title="Não se esqueça"
            fontSize={18}
            eventWidth={180}
            eventHeight={120}
            horizontal
          />
        </View>
        <Text style={styles.title}>Destaques</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  eventsWrapper: {
    marginVertical: 20,
  },
  title: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#444',
  },
});

export default HomeLIstHeader;
