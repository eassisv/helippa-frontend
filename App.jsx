import React from "react";
import { View } from "react-native";
import Select from "./src/components/Select";

const App = () => (
  <View
    style={{
      backgroundColor: "red",
      flex: 1,
      alingItems: "center",
      justifyContent: "center"
    }}
  >
    <Select />
  </View>
);

export default App;
