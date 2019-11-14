import React from "react";
import { View, Image, Dimensions } from "react-native";
import Modal from "react-native-modal";
import PropTypes from "prop-types";
import styles from "../styles";
import TitleText from "./TitleText";
import JumpingIcon from "./JumpingIcon";

const { width, height } = Dimensions.get("window");
const logo = require("../../assets/logo-e-escrita-transparente-vertical2.png");

const ModalLogo = ({ visible, onDismiss }) => {
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
          source={logo}
          style={{ width: "50%", height: "50%", marginBottom: "10%" }}
          resizeMode="contain"
          resizeMethod="scale"
        />
        <TitleText color="#ffffffdd" align="center">
          O conhecimento muda o mundo e queremos oferecer a mudança
        </TitleText>
        <JumpingIcon
          style={{ marginTop: "10%" }}
          name="chevron-double-up"
          color="#ffffffdd"
          size={48}
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
