import React from "react";
import { View } from "react-native";
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InputText(){
  const [text, setText] = useState('')

  return(
    <View style={{ backgroundColor: '#EAEBE9', height: 50, width: 300, borderRadius: 10 }}>
      <Input
        disabled true
        placeholder='Pesquisa'
        placeholderTextColor='#3cb371'
        rightIcon={
          <Icon
            name='search'
            size={24}
            color='#3cb371'
            underlineColorAndroid="red"
          />
        }
        // errorMessage='ENTER A VALID ERROR HERE'
        value={text} onChangeText={setText}
      />
    </View>
  )
}

