/// Componente responsável pela lista horizontal dos eventos
// recebe por parametro a lista { id: 0, full_name: "Curso de Pyhton" ,image: require("./assets/images/evento.png") }
// recebe por parametro também o titulo e a altura em porcentagem(altura recomentada 1%) além da cor do Titulo.
// Exemplo de chamada do componente: <Events data={this.state.data} titulo={"Não se Esqueça"} altura={'1%'} corTitulo={'black'}></Events>
import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import Event_Item from "./Event_item";

const Events = ({ data, titulo, altura, corTitulo }) => {
  const {teste} = 50;
  renderItem = ({ item }) => (
    <Event_Item imagem={item.image} nome={item.full_name} tam={150} />
    // Esse componente chama o componente que vai distribuir os eventos na lista tendo que passar por parametro o tamanho da imagem na variavel "tam"
  );
  return (
    <ScrollView>
      <Text style={{ marginLeft: 5, fontSize: 25, color: corTitulo }}>
        {titulo}
      </Text>
      <View>
        <FlatList
          horizontal
          style={{
            paddingVertical: altura,
            marginTop: 1,
            marginBottom: 2,
            marginLeft: 5
          }}
          contentContainerStyle={styles.list}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  text1: {
    marginLeft: 2,
    fontSize: 2,
    color: "#ff0"
  }
});

export default Event_list;