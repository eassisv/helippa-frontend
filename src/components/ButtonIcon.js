import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ButtonIcon = ({
  title,
  color,
  iconSize,
  fontSize,
  backgroundColor,
  iconName
}) => {
  const styles = createStyles(color, fontSize, backgroundColor);

  return (
    <TouchableOpacity style={styles.button}>
      <FontAwesome name={iconName} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const createStyles = (color, fontSize, backgroundColor) =>
  StyleSheet.create({
    button: {
      backgroundColor,
      flexDirection: "row",
      borderRadius: 5
    },
    title: { color, fontSize, padding: 8 },
    icon: { color, padding: 5 }
  });

export default ButtonIcon;
