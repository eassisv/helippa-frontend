import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Dimensions,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import axios from 'axios';
import HomeHeader from '../components/HomeHeader';
import HomeListHeader from '../components/HomeListHeader';
import EventList from '../components/EventList';

const url = require('../../backendroute').default.baseUrl;

const width = Dimensions.get('window').width - 30; // -30 because of padding
const height = Math.round(width * (2 / 3));

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, events: []};
    this.flatList = React.createRef();
    StatusBar.setBackgroundColor('darkcyan');
  }

  async getEvents() {
    this.setState({loading: true});
    try {
      const res = await axios.get(`${url}api/event`);
      this.setState({events: res.data.reverse(), loading: false});
    } catch (error) {
      Alert.alert(
        'Erro ao carregar eventos',
        'Talvez você esteja sem conexão com a internet',
      );
    }
    this.setState({loading: false});
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
              ListHeaderComponent={
                <HomeListHeader
                  navigation={navigation}
                  onReload={() => this.getEvents()}
                />
              }
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
    backgroundColor: '#eee',
  },
  indicatorWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
