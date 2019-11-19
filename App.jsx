import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  View,
  Button
} from "native-base";

const styles = StyleSheet.create({
  buttonsLine: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between"
  },
  button: {
    width: "43.75%",
    alignItems: "center"
  },
  content: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "darkcyan",
    alignItems: "center"
  },
  input: {
    // alignSelf: "stretch"
    width: "80%"
  }
});

const App = () => {
  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Text>Informações pessoais</Text>
        <Form>
          <Item floatingLabel style={styles.input}>
            <Label>Nome Completo</Label>
            <Input />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label>E-mail</Label>
            <Input />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label>Senha</Label>
            <Input />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label>Confirmar Senha</Label>
            <Input />
          </Item>
        </Form>
        <View style={styles.buttonsLine}>
          <Button style={styles.button}>
            <Text>Cancelar</Text>
          </Button>
          <Button style={styles.button}>
            <Text>Próximo</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default App;
