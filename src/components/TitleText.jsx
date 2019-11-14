import React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const TitleText = ({ size, color, align, children }) => {
  return <Text style={styles(size, color, align).text}>{children}</Text>;
};

TitleText.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  size: PropTypes.number
};

TitleText.defaultProps = {
  children: "",
  color: "#000",
  align: "auto",
  size: 20
};

const styles = (size, color, align) =>
  StyleSheet.create({
    text: {
      fontWeight: "bold",
      textAlign: align,
      fontSize: size,
      color
    }
  });

export default TitleText;
