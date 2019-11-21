import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView, Image,TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Event =({imagem, nome,tam}) =>{
    

    return(
            <View style={styles.listItem}>
        <TouchableOpacity onclick="clickPress()">
            <Image style={styles.img} source={
                                imagem
                                }></Image>
        </TouchableOpacity>
        <Text style={styles.textEvent}>{nome}</Text>
    </View>
    );
};
const styles = StyleSheet.create({
    img:{
        marginTop: hp('1%'),
        marginBottom: hp('1%'),
        marginRight: hp('1%'),
        marginLeft: hp('1%'),
        padding: hp('2%'),
        width: hp({tam}),
        height: hp('15%'),
        borderRadius: hp('1%')
    },
    textEvent:{
        marginLeft: hp('1%')
    },
  });
  
export default Event;