import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView, Image,TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Events extends Component {
    state = {
        data: [
            { id: 0, full_name: "Curso de Pyhton" ,image: require("../assets/images/evento.png") },
            { id: 1, full_name: "Pré-Enem"  ,image: require("../assets/images/evento2.png")},
            { id: 2, full_name: "Curso de Culinária"  ,image: require("../assets/images/evento3.png")},
            { id: 3, full_name: "Curso de Fotografia"  ,image: require("../assets/images/evento4.png")},
            { id: 4, full_name: "Curso de Violino"  ,image: require("../assets/images/evento5.png")}
        ]
    };
    
    renderItem = ({ item }) => (  
    <View style={styles.listItem}>
        <TouchableOpacity>
            <Image style={styles.img} source={
                                item.image
                                }></Image>
        </TouchableOpacity>
        <Text style={styles.textEvent}>{item.full_name}</Text>
    </View>
    );
    renderItem2 = ({ item }) => (  
      <View style={styles.listItem}>
          <TouchableOpacity>
              <Image style={styles.img2} source={
                                  item.image
                                  }></Image>
          </TouchableOpacity>
          <Text style={styles.textEvent2}>{item.full_name}</Text>
      </View>
      );
    // unsplash imagens colocar diferentes e tal.
    render() {
        return (
            <ScrollView>
            <Text style={styles.text1}>Não se esqueça</Text>
            <View>
              <FlatList
                horizontal
                style={styles.list1}
                contentContainerStyle={styles.list}
                data={this.state.data}
                renderItem={this.renderItem2}
                keyExtractor={item => item.id}
              />
            </View>
            <Text style={styles.text2}>Para você</Text>
            <View>
              <FlatList
                horizontal
                style={styles.list}
                contentContainerStyle={styles.list}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
            </View>
            <Text style={styles.text2}>Destaques</Text>
            <View>
              <FlatList
                horizontal
                style={styles.list}
                contentContainerStyle={styles.list}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
            </View>
            <Text style={styles.text2}>Novidades</Text>
            <View>
              <FlatList
                horizontal
                style={styles.list}
                contentContainerStyle={styles.list}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
            </View>
            <Text style={styles.text2}>Perto de você</Text>
            <View>
              <FlatList
                horizontal
                style={styles.list}
                contentContainerStyle={styles.list}
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          </ScrollView>
        );
        }
    }
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
      
