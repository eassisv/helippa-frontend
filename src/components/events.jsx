// Componente responsável pela lista horizontal dos eventos
// recebe por parametro a lista { id: 0, full_name: "Curso de Pyhton" ,image: require("./assets/images/evento.png") }
// recebe por parametro também o titulo e a altura em porcentagem(altura recomentada 1%) além da cor do Titulo.
// Exemplo de chamada do componente: <Events data={this.state.data} titulo={"Não se Esqueça"} altura={'1%'} corTitulo={'black'}></Events>
import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView, Image,TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Event from './event'
const Events =({data,titulo,altura,corTitulo}) =>{
    
    renderItem = ({item}) => (
      <Event imagem ={item.image} nome = {item.full_name} tam={'15%'}></Event>
      //Esse componente chama o componente que vai distribuir os eventos na lista tendo que passar por parametro o tamanho da imagem na variavel "tam"
    );
    return (
      <ScrollView>
        <Text style={{marginLeft: hp('2%'),
            fontSize:hp('3.5%'),
		        color: corTitulo,}}>{titulo}</Text>
        <View>
          <FlatList
            horizontal
            style={{paddingVertical: hp(altura),
            marginTop: hp('0.3%'),
            marginBottom: hp('2%'),
            marginLeft: hp('1%')}}
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
        text1:{
            marginLeft: hp('2%'),
            fontSize:hp('3.5%'),
		        color: '#ff0',
        }
      });

export default Events;
      
