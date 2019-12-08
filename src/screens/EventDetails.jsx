/* eslint-disable react/prefer-stateless-function, react/destructuring-assignment, react/prop-types, camelcase */
import React, { Component } from "react";
import { View, StatusBar, Text, ScrollView, Image, Share } from "react-native";
import { Container, Icon, Button, Header, Left, Right } from "native-base";

/*
  The parameters this screen uses are:
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
  event = null;

  constructor(props) {
    super(props);
    StatusBar.setBackgroundColor("darkcyan");
    this.event = this.loadEvent();
  }

  shareEvent = async () => {
    try {
      const message = `${this.event.title}\n${this.event.subtitle}\n${this.event.text}`;
      const result = await Share.share({ title: this.event.title, message });

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

  loadEvent = () => {
    const { navigation } = this.props;
    const title = navigation.getParam("title", null);
    const subtitle = navigation.getParam("subtitle", null);
    const text = navigation.getParam("text", null);
    const image = navigation.getParam("image", null);
    const date = navigation.getParam("date", null);
    const startDate = navigation.getParam("startDate", null);
    const endDate = navigation.getParam("endDate", null);
    const location = navigation.getParam("location", null);
    const url = navigation.getParam("url", null);

    if (!title || !text) this.props.navigation.goBack();

    return {
      title,
      subtitle,
      text,
      image,
      date,
      startDate,
      endDate,
      location,
      url
    };
  };

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon type="FontAwesome" name="arrow-left" />
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Icon type="FontAwesome" name="heart-o" />
            </Button>
            <Button transparent onPress={this.shareEvent}>
              <Icon type="FontAwesome" name="share-alt" />
            </Button>
          </Right>
        </Header>
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
      </Container>
    );
  }
}

export default EventDetails;
