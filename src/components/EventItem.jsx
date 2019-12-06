import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import LoadingImage from "./LoadingImage";

export default class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  setLoadingOn() {
    this.setState({ loading: true });
  }

  setLoadingOff() {
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    const { image, title, width, height, fontSize } = this.props;
    const styles = createStyle(width, fontSize);

    return (
      <TouchableOpacity style={styles.container}>
        <LoadingImage
          source={image}
          width={width}
          height={height}
          onLoadStart={() => this.setLoadingOn()}
          onLoadEnd={() => this.setLoadingOff()}
        />
        <View style={styles.titleWrapper}>
          {loading || !image ? (
            <View style={styles.loadingText} />
          ) : (
            <Text style={styles.title}>{title}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const createStyle = (width, fontSize) =>
  StyleSheet.create({
    container: {
      width
    },
    title: {
      fontSize,
      color: "#444"
    },
    titleWrapper: {
      width: "100%",
      marginTop: 10
    },
    loadingText: {
      height: fontSize,
      width: "80%",
      backgroundColor: "#eee"
    }
  });

EventItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.number
};

EventItem.defaultProps = {
  image: null,
  title: "",
  width: 300,
  height: 200,
  fontSize: 16
};
