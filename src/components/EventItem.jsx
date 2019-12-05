import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import LoadingImage from "./LoadingImage";

export default class EventItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  toggleLoading() {
    this.setState(state => ({ loading: !state.loading }));
  }

  render() {
    const { loading } = this.state;
    const { image, label, width, height, fontSize } = this.props;
    const styles = createStyle(width, fontSize);

    return (
      <TouchableOpacity style={styles.container}>
        <LoadingImage
          source={image}
          width={width}
          height={height}
          onLoadStart={() => this.toggleLoading()}
          onLoadEnd={() => this.toggleLoading()}
        />
        <View style={styles.labelWrapper}>
          {loading ? (
            <View style={styles.loadingText} />
          ) : (
            <Text style={styles.label}>{label}</Text>
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
    label: {
      fontSize,
      color: "#444"
    },
    labelWrapper: {
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
  label: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.number
};

EventItem.defaultProps = {
  image: null,
  label: "",
  width: 300,
  height: 200,
  fontSize: 16
};
