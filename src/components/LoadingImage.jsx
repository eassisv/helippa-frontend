import React from "react";
import { View, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const LoadingImage = ({ source, width, height, onLoadStart, onLoadEnd }) => {
  const image = typeof source === "string" ? { uri: source } : source;
  const styles = createStyles(width, height);

  return (
    <View>
      <View style={styles.placeholder} />
      <Image
        source={image}
        resizeMode="stretch"
        resizeMethod="scale"
        style={styles.image}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
      />
    </View>
  );
};

const createStyles = (width, height) =>
  StyleSheet.create({
    image: {
      width,
      height,
      borderRadius: 2
    },
    placeholder: {
      width,
      height,
      borderRadius: 2,
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "#eee"
    }
  });

LoadingImage.propTypes = {
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onLoadStart: PropTypes.func,
  onLoadEnd: PropTypes.func
};

LoadingImage.defaultProps = {
  source: null,
  width: 300,
  height: 200,
  onLoadStart: () => {},
  onLoadEnd: () => {}
};

export default LoadingImage;
