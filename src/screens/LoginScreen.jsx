import React from "react";
import { View, StyleSheet, Text } from "react-native";
import InitialModalLogo from "../components/InitialModalLogo";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: true };
  }

  modalDismissHandle() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    return (
      <View style={styles.container}>
        <InitialModalLogo
          visible={showModal}
          onDismiss={() => this.modalDismissHandle()}
        />
        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
