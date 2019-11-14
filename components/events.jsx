import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ScrollView, Image,TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Events extends Component {
    state = {
        data: [
            { id: 0, full_name: "Repo 1" },
            { id: 1, full_name: "Repo 2" },
            { id: 2, full_name: "Repo 3" },
            { id: 3, full_name: "Repo 4" },
            { id: 4, full_name: "Repo 5" }
        ]
    };

    renderItem = ({ item }) => (
    <View style={styles.listItem}>
        <TouchableOpacity>
            <Image style={styles.img} source={
                                require('../assets/images/evento.png')
                                }></Image>
        </TouchableOpacity>
        <Text style={styles.textEvent}>{item.full_name}</Text>
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
                renderItem={this.renderItem}
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
            width: wp('15%'),
            height: hp('12%'),
            borderRadius: hp('1%')
        },
        textEvent:{
            marginLeft: hp('1%')
        },
        text1:{
            marginLeft: hp('1%'),
            fontSize:hp('3.5%'),
		    color: '#ff0',
        },
        text2: {
            marginLeft: hp('1%'),
            fontSize:hp('2.5%'),
            color: '#0f0'
        },
        list: {
          marginTeact-native-responsive-screen';op: hp('0.3%'),
          marginBottom: hp('2%')

        },
        list1:{
            
        },
        container: {
          alignItems: "center",
          backgroundColor: "#fff",
          flex: 1,
          justifyContent: "center"
        }
      });
      


