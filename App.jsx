import React, { Component } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { SafeAreaView } from "react-navigation";
import { Platform, StatusBar } from "react-native";
import AppNavigator from "./src/AppNavigator";

const verticalLogo = require("./assets/logo-e-escrita-transparente-vertical.png");

const assets = [verticalLogo];

// Removing extra space at top of header on android
if (Platform.OS === "android") SafeAreaView.setStatusBarHeight(0);
StatusBar.setBackgroundColor("darkcyan");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  loadAssetsAsync = async () => Promise.all([Asset.loadAsync(assets)]);

  render() {
    const { loading } = this.state;
    return loading ? (
      <AppLoading
        startAsync={this.loadAssetsAsync}
        onFinish={() => this.setState({ loading: false })}
      />
    ) : (
      <AppNavigator />
    );
  }
}
