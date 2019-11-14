import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const App = () => (
  <View style={styles.container}>
    <Image
      source={{
        uri:
          "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
      }}
      style={{ height: 250, width: 500, opacity: 0.5 }}
    />
    <Text>Hello World!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#3C4859",
    flex: 1,
    justifyContent: "flex-start"
  }
});

export default App;
