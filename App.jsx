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

const App = () => {
  return (
    <Container>
      <Content>
        <Text>Informações pessoais</Text>
        <Form>
          <Item floatingLabel>
            <Label>Nome Completo</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>E-mail</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Senha</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Confirmar Senha</Label>
            <Input />
          </Item>
        </Form>
        <View>
          <Button>
            <Text>Cancelar</Text>
          </Button>
          <Button>
            <Text>Próximo</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default App;
