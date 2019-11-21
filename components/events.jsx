import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView, Image,TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Event from './event'
const Events =({data,titulo}) =>{
    
    renderItem = ({item}) => (
      <Event imagem ={item.image} nome = {item.full_name} tam={'15%'}></Event>
    );
    return (
      <ScrollView>
        <Text style={styles.text1}>{titulo}</Text>
        <View>
          <FlatList
            horizontal
            style={styles.list1}
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
        img:{
            marginTop: hp('1%'),
            marginBottom: hp('1%'),
            marginRight: hp('1%'),
            marginLeft: hp('1%'),
            padding: hp('2%'),
            width: hp('15%'),
            height: hp('15%'),
            borderRadius: hp('1%')
        },
        img2:{
          marginTop: hp('1%'),
          marginBottom: hp('1%'),
          marginRight: hp('1%'),
          marginLeft: hp('1%'),
          padding: hp('2%'),
          width: hp('20%'),
          height: hp('20%'),
          borderRadius: hp('1%')
        },
        textEvent:{
            marginLeft: hp('1%')
        },
        textEvent2: {
          marginLeft: hp('1%')
        },
        text1:{
            marginLeft: hp('2%'),
            fontSize:hp('3.5%'),
		        color: '#ff1',
        },
        text2: {
            marginLeft: hp('2%'),
            fontSize:hp('2.5%'),
            color: '#0f0'
        },
        list: {
          marginTop: hp('0.3%'),
          marginBottom: hp('2%'),
          marginLeft: hp('1%')

        },
        list1:{
          marginTop: hp('0.3%'),
          marginBottom: hp('2%'),
          marginLeft: hp('1%')
        },
        container: {
          alignItems: "center",
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "center"
        }
      });

export default Events;
      
