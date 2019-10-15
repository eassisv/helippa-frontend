import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";

const img = require("../../assets/logo-e-escrita-transparente-vertical.png");

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
      <View style={[styles.container, styles.modal]}>
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

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    backgroundColor: "orange",
    width,
    height
  }
});

export default InitialModalLogo;
