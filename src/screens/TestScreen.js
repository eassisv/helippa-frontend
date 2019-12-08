/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import EventItem from "../components/EventItem";
import EventList from "../components/EventList";

const useds = {};
const random = () => Math.round(Math.random() * 1000);

const getEvent = () => {
  let event;
  do event = random();
  while (useds[event] !== undefined);
  useds[event] = event;
  return {
    event: `${event}`,
    image: `http://picsum.photos/id/${event}/300/200/`,
    title: `Eventinho ${event}`
  };
};

// <EventItem
//   image="http://lorempixel.com/300/200/"
//   width={300}
//   height={200}
//   fontSize={16}
//   title="Labelzinha"
// />

export default class TestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [], rememberMe: [] };
  }

  getRandomEvents() {
    const events = [];
    for (let i = 0; i < 10; i++) {
      events.push(getEvent());
    }
    return events;
  }

  componentDidMount() {
    const events = this.getRandomEvents();
    this.setState({ events, rememberMe: events });
  }

  render() {
    const { navigation } = this.props;
    const { events, rememberMe } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <EventList
          events={rememberMe}
          title="Eventinhos"
          onEventPressed={event => navigation.push("Event", { event })}
          horizontal
          eventWidth={120}
          eventHeight={80}
          eventFontSize={16}
        />
        <View style={{ flex: 1 }}>
          <EventList
            events={events}
            title="Eventinhos"
            onEventPressed={event => navigation.push("Event", { event })}
            eventWidth={300}
            eventHeight={200}
            eventFontSize={16}
          />
        </View>
      </View>
    );
  }
}
