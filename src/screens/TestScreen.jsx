/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { View } from "react-native";
import EventItem from "../components/EventItem";

export default class TestScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <EventItem
          image="http://lorempixel.com/300/200/"
          width={300}
          height={200}
          fontSize={16}
          label="Labelzinha"
        />
      </View>
    );
  }
}
