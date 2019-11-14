import React, { Component } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import AppNavigator from "./src/AppNavigator";

const verticalLogo = require("./assets/logo-e-escrita-transparente-vertical2.png");

const assets = [verticalLogo];

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
