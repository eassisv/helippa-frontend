import React from "react";
import { View, Text } from "react-native";
import ModalLogo from "../components/ModalLogo";
import styles from "../styles";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: true };
  }

  render() {
    const { showModal } = this.state;
    return (
      <View style={styles.container}>
        <ModalLogo
          visible={showModal}
          onDismiss={() => this.setState({ showModal: false })}
        />
        <Text>Hello</Text>
      </View>
    );
  }
}
