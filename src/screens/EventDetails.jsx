/* eslint-disable react/prefer-stateless-function, react/destructuring-assignment, react/prop-types, camelcase */
import React, { Component } from "react";
import { View, Text, ScrollView, Image, Share } from "react-native";
import { Icon, Button } from "native-base";

/*
  This screen need to receive an event, which needs to has:
    title       required
    subtitle    optional
    text        required
    image       optional
    date        optional
    startDate   optional
    endDate     optional, but required if startDate exists
    location    optional
    url         optional
*/

class EventDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: () => (
        <Button transparent onPress={navigation.getParam("shareEvent")}>
          <Icon name="share" style={{ color: "white" }} />
        </Button>
      )
    };
  };

  event = null;

  constructor(props) {
    super(props);
    this.event = this.props.navigation.getParam("event", null);
    if (!this.event) this.props.navigation.goBack();
  }

  componentDidMount() {
    this.props.navigation.setParams({ shareEvent: this.shareEvent });
  }

  shareEvent = async event => {
    try {
      const message = `${event.title}\n${event.subtitle}\n\n${event.text}`;
      const result = await Share.share({ title: event.title, message });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {this.event.image && (
          <Image
            source={{ uri: this.event.image }}
            style={{ width: "100%", height: 200 }}
            resizeMode="stretch"
          />
        )}
        <View style={{ margin: 30 }}>
          <Text style={{ fontSize: 26 }}>{this.event.title}</Text>
          {this.event.subtitle && (
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              {this.event.subtitle}
            </Text>
          )}
          {this.event.date && (
            <View style={{ fontSize: 14, flexDirection: "row" }}>
              <Icon
                type="FontAwesome"
                name="calendar"
                style={{ fontSize: 14 }}
              />
              <Text>{`   ${this.event.date}`}</Text>
            </View>
          )}
          {this.event.startDate && this.event.endDate && (
            <View style={{ fontSize: 14, flexDirection: "row" }}>
              <Icon
                type="FontAwesome"
                name="calendar"
                style={{ fontSize: 14 }}
              />
              <Text>{`   ${this.event.startDate} até ${this.event.endDate}`}</Text>
            </View>
          )}
          {this.event.location && (
            <View style={{ fontSize: 14, flexDirection: "row" }}>
              <Icon
                type="FontAwesome"
                name="map-marker"
                style={{ fontSize: 14 }}
              />
              <Text>{`   ${this.event.location}`}</Text>
            </View>
          )}
          {this.event.url && (
            <View style={{ fontSize: 14, flexDirection: "row" }}>
              <Icon
                type="FontAwesome"
                name="external-link"
                style={{ fontSize: 14 }}
              />
              <Text>{`   ${this.event.url}`}</Text>
            </View>
          )}
          <Text style={{ fontSize: 16, marginTop: 10, textAlign: "justify" }}>
            {this.event.text}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default EventDetails;
