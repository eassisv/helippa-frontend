//Componente de renderização dos eventos dentro de uma lista
//Deve receber a imagem, o nome e o tamanho das imagens
//Exemplo de chamada: <Event imagem ={item.image} nome = {item.full_name} tam={'15%'}></Event>
//Dentro da função onClickEvent deve ser tratado após conexão com o back para mostrar os detalhes de cada evento
import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView, Image,TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Event =({imagem, nome,tam}) =>{
    const tamanho = {tam};
    console.log(tam);
    onClickEvent =  () => {
        console.log('Entrou no evento')
    };
    return(
            <View style={styles.listItem}>
        <TouchableOpacity onPress={this.onClickEvent}>
            <Image style={{marginTop: hp('1%'),
        marginBottom: hp('1%'),
        marginRight: hp('1%'),
        marginLeft: hp('1%'),
        padding: hp('2%'),
        width: hp(tam),
        height: hp(tam),
        borderRadius: hp('1%')}} source={
                                imagem
                                }></Image>
        </TouchableOpacity>
        <Text style={styles.textEvent}>{nome}</Text>
    </View>
    );
};
const styles = StyleSheet.create({
    textEvent:{
        marginLeft: hp('1%')
    },
  });
  
export default Event;