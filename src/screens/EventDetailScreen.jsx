/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EventItem from "../components/EventItem";

const EventDetailScreen = ({ navigation }) => {
  const { event } = navigation.state.params;
  return (
    <View>
      <EventItem
        image={event.image}
        title={event.title}
        width={300}
        height={200}
      />
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.goBack()}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventDetailScreen;
