import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import Events from './components/events'

const App = () => (
  <View>
    <Events></Events>
  </View>
);

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20
  },
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center"
  }
});

export default App;
