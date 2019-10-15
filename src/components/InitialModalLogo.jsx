import React from "react";
import { View, Image, Dimensions } from "react-native";
import Modal from "react-native-modal";
import styles from "../styles";

const img = require("../../assets/logo-e-escrita-transparente-vertical.png");

const { width, height } = Dimensions.get("window");

const InitialModalLogo = ({ visible, onDismiss }) => {
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

export default InitialModalLogo;
