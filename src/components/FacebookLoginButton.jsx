import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from "@expo/vector-icons";

const facebookColor = "#4267B2";

const FacebookLoginButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesome name="facebook-official" size={36} color={facebookColor} />
      <Text style={styles.text}>Entrar com o Facebook</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 240,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: "#fff",
    borderRadius: 3,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: 16,
    color: facebookColor,
    paddingLeft: 7
  }
});

export default FacebookLoginButton;
