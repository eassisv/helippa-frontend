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

const {width} = Dimensions.get('window');
const height = Math.round(width * (2 / 3));

export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Principal',
  };

  render() {
    const {navigation} = this.props;
    console.log(navigation);
    return (
      <View style={styles.container}>
        <HomeHeader onPressMenu={() => navigation.openDrawer()} />
        <View style={styles.container}>
          <EventList
            events={events}
            onEventPressed={event =>
              this.props.navigation.push('EventDetailScreen', {event})
            }
            ListHeaderComponent={<HomeListHeader />}
            eventWidth={width}
            eventHeight={height}
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
    backgroundColor: '#f7f7f7',
  },
});
