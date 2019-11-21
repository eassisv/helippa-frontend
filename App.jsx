import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import Events from './components/events'
state = {
  data: [
      { id: 0, full_name: "Curso de Pyhton" ,image: require("./assets/images/evento.png") },
      { id: 1, full_name: "Pré-Enem"  ,image: require("./assets/images/evento2.png")},
      { id: 2, full_name: "Curso de Culinária"  ,image: require("./assets/images/evento3.png")},
      { id: 3, full_name: "Curso de Fotografia"  ,image: require("./assets/images/evento4.png")},
      { id: 4, full_name: "Curso de Violino"  ,image: require("./assets/images/evento5.png")}
  ]
};
const App = () => (
  <View>
    <Events data={this.state.data} titulo={"Não se Esqueça"}></Events>
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
