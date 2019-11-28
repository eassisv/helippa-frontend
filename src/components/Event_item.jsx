// Componente de renderização dos eventos dentro de uma lista
// Deve receber a imagem, o nome e o tamanho das imagens
// Exemplo de chamada: <Event_Item imagem={item.image} nome={item.full_name} tam={150} /></Event_Item>
// Dentro da função onClickEvent deve ser tratado após conexão com o back para mostrar os detalhes de cada evento
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Event = ({ imagem, nome, tam }) => {
  onClickEvent = () => {
    console.log("Entrou no evento");
  };
  return (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={this.onClickEvent}>
        <Image
          style={{
            marginTop: 3,
            marginBottom: 3,
            marginRight: 5,
            marginLeft: 5,
            padding: "5%",
            width: tam,
            height: tam,
            borderRadius: 5
          }}
          source={imagem}
        />
      </TouchableOpacity>
      <Text style={styles.textEvent}>{nome}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textEvent: {
    marginLeft: 3
  }
});

export default Event_item;
