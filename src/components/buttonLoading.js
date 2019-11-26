import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    CheckBox, TouchableOpacity,
    ActivityIndicator

} from 'react-native';
export default class home extends Component {
    constructor() {
        super()
        this.state = {
            showME: true
        }
    }
    componetWillMount() {
        setTimeout(() => {

            this.setState({
                showME: false
            })

        },

            3000)
    }

    render() {
        return (
            <View style={Style.container}>
                {
                    this.state.showME ?
                        <ActivityIndicator size="large" colo="#ff000" />

                        :
                        <View>
                            <Text>Loader está oculto agora</Text>
                        </View>

                }

            </View>
        );

    }
}



var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff'

    }
})
