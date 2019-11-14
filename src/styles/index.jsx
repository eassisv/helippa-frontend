import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  darkcyanContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkcyan",
    color: "white"
  },
  orangeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    color: "white"
  },
  logo: {
    flex: 2,
    alignSelf: "center",
    width: "60%"
  },
  input: {
    color: "black",
    width: 200,
    height: 44,
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 15
  }
});

export default Styles;
