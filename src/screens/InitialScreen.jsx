import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";

const img = require("../../assets/logo-e-escrita-transparente-vertical.png");

const InitialScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      <Image
        source={img}
        resizeMode="contain"
        style={{ width: width - 5, height: height - 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange"
  }
});

export default InitialScreen;
