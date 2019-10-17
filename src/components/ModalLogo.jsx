import React from "react";
import { View, Image, Dimensions } from "react-native";
import Modal from "react-native-modal";
import PropTypes from "prop-types";
import styles from "../styles";

const { width, height } = Dimensions.get("window");

const ModalLogo = ({ visible, onDismiss, img }) => {
  return (
    <Modal
      isVisible={visible}
      swipeDirection="up"
      backdropOpacity={1}
      backdropColor="orange"
      animationInTiming={0}
      animationOut="slideOutUp"
      onSwipeComplete={() => onDismiss()}
      style={styles.container}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: "orange",
            width,
            height
          }
        ]}
      >
        <Image
          source={img}
          style={{ width: "75%", height: "75%" }}
          resizeMode="contain"
          resizeMethod="scale"
        />
      </View>
    </Modal>
  );
};

ModalLogo.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func
};

ModalLogo.defaultProps = {
  visible: false,
  onDismiss: () => {}
};

export default ModalLogo;
