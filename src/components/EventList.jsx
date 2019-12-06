import React from "react";
import { View, Text, FlatList } from "react-native";
import PropTypes from "prop-types";

const EventList = ({ events, title }) => {
  return (
    <View>
      <Text>{title}</Text>
      <FlatList />
    </View>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({ image: PropTypes.string, title: PropTypes.string })
  )
};

export default EventList;
