import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from "@expo/vector-icons";

const FacebookLoginButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <FontAwesome name="facebook-official" size={32} color="#4267B2" />
      <Text style={{ color: "#4267B2" }}>Entrar com o Facebook</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: "5%",
    borderRadius: 2,
    backgroundColor: "#ffffff"
  }
});

export default FacebookLoginButton;
