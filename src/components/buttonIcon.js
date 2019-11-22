import React from "react";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export function ButtonIcon(props) {
    return (
        
        // https://fontawesome.com/icons?d=gallery  <-- Icones
        // Atualmente retorna um botão com fundo transparente e escritas brancas
        // Por isso cuide para não colocar em fundos brancos, ou altere sua cor
        
        <Button
            icon={
            <Icon
                name="home"
                size={25}
                color='white'
                style={{ left: -5 }}
            />
            }
            titleStyle={{ color: 'white' }}
            title="Minha Conta"
            type="clear"
        />
        
    )
}
