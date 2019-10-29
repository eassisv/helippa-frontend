import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";

state = {
  data: [
    { id: 0, full_name: "Repo 1" },
    { id: 1, full_name: "Repo 2" },
    { id: 2, full_name: "Repo 3" },
    { id: 3, full_name: "Repo 4" },
    { id: 4, full_name: "Repo 5" }
  ]
};

renderItem = ({ item }) => (
  <View style={styles.listItem}>
    <Text>{item.full_name}</Text>
  </View>
);

const App = () => (
  <ScrollView>
    <View>
      <FlatList
        horizontal
        style={{ marginTop: 30 }}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    </View>
    <View>
      <FlatList
        horizontal
        style={{ marginTop: 30 }}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    </View>
    <View>
      <FlatList
        horizontal
        style={{ marginTop: 30 }}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    </View>
    <View>
      <FlatList
        horizontal
        style={{ marginTop: 30 }}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    </View>
    <View>
      <FlatList
        horizontal
        style={{ marginTop: 30 }}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  </ScrollView>
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
