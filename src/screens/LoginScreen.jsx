import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import ModalLogo from "../components/ModalLogo";

// Carrega as imagens de forma assíncrona para serem exibidas na tela de login
const cacheImages = images =>
  images.map(image =>
    typeof image === "string"
      ? Image.prefetch(image)
      : Asset.fromModule(image).downloadAsync()
  );

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: true, loading: true };
  }

  modalDismissHandle() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal, loading } = this.state;
    if (loading) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync()}
          onFinish={() => this.setState({ loading: false })}
        />
      );
    }
    return (
      <View style={styles.container}>
        <ModalLogo
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
