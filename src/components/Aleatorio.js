import React from 'react';
import { View, Text } from 'react-native';
import Estilo from './estilo';

export default ({ min, max }) => {
    const delta = max - min + 1;
    const aleatorio = parseInt(Math.random() * delta) + min;
    return (
        <View>
            <Text style={Estilo.txtG}>Número aleatório: {aleatorio}</Text>        
            <Text>Gerado entre {min} e {max}</Text>
        </View>
    );
}