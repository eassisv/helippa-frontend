import React, { Component } from "react";
import { View } from "react-native";
import Select from "./src/components/Select";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selecionado: 2
    };
  }

  funct = selecionado => {
    this.setState({ selecionado });
  };

  render() {
    const { selecionado } = this.state;
    return (
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          alingItems: "center",
          justifyContent: "center"
        }}
      >
        <Select
          onChange={value => this.funct(value)}
          selectedValue={selecionado}
          items={[
            { value: 1, label: "oi" },
            { value: 2, label: "oi2" }
          ]}
        />
      </View>
    );
  }
}
