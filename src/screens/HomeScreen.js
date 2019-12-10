import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import HomeListHeader from '../components/HomeListHeader';
import EventList from '../components/EventList';

const width = Dimensions.get('window').width - 30; // -30 because of padding
const height = Math.round(width * (2 / 3));

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {events: []};
    this.flatList = React.createRef();
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
    const {events} = this.state;
    return (
      <View style={styles.container}>
        <HomeHeader
          onPressLogo={() => this.scrollToTop()}
          onPressMenu={() => navigation.openDrawer()}
        />
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
