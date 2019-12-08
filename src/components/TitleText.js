import React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const TitleText = ({ size, color, align, children, fontWeight }) => {
  const styles = createStyles(size, color, align, fontWeight);

  return <Text style={styles.text}>{children}</Text>;
};

TitleText.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  size: PropTypes.number,
  fontWeight: PropTypes.string
};

TitleText.defaultProps = {
  children: "",
  color: "#444",
  align: "auto",
  size: 20,
  fontWeight: "bold"
};

const createStyles = (size, color, align, fontWeight) =>
  StyleSheet.create({
    text: {
      fontWeight,
      textAlign: align,
      fontSize: size,
      color
    }
  });

export default TitleText;
