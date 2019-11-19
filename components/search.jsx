import React, {Component} from 'react';
import {Modal, FlatList, TouchableOpacity, Text, TextInput, View, StyleSheet, Image, AsyncStorage} from 'react-native';

class Search extends Component {
  state = {
    modalVisible: false,
  };

  onSeatPress(visible) {
    this.setState({modalVisible: visible});
  }


  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity
            onPress={() => {this.onSeatPress(true);}}><Text style={styles.text}>KKKKKKK</Text>
            <Image source={
                require('../assets/images/evento.png')
                } style={styles.seatImg}/>
        </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          >
            <View>
                <View>
                    <View style={styles.bar}></View>
                    <TouchableOpacity
                        onPress={() => {this.onSeatPress(false);}}
                        title="voltar"
                        style={styles.button}>
                        <Text style = {styles.text}>VOLTAR</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput
                        style = {styles.input}
                        value = {this.state.searchNick}
                        returnKeyType="search"
                        placeholder="Busca por Nick"
                        onChangeText={(searchNick) => this.handleInputChange(searchNick)}
                    />
                </View>
            </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    button:{
        backgroundColor:'black',
        alignSelf: 'center',
        padding:5
	},
    seatImg: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    bar:{
        backgroundColor: 'black',
        width:500,
        height: 30,
    },
    lt:{
        overflow:'hidden'
    },
    text:{
		fontSize: 20,
		color: 'white',
		textAlign:'center'
	},
    icone:{
        alignSelf: 'center'
    },
    lt:{
        overflow:'hidden'

    },
    rk: {
        color: 'black',
		textAlign:'left',
		fontSize: 15
    },
    nick: {
        color: 'black',
		fontWeight:'bold',
		textAlign:'left',
		fontSize: 20
    },
    list: {
        overflow:'hidden',
        flexDirection: 'row',
        alignItems: 'center',
		width:380,
		height:60,
		borderRadius: 0,
		borderWidth: 2,
		borderColor: 'black',

    },
    input: {
        fontSize:20,
        marginTop:1,
        marginBottom:5,
		width:350,
		height:40,
		padding: 5,
		borderRadius: 0,
		borderBottomWidth: 2,
		borderColor: 'black',
    },
})


export default Search;