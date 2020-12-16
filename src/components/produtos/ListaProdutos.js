import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';

import produtos from './produtos';

export default props => {
    function obterLlista() {
        return produtos.map(p => {
            <Text key={p.id}>{p.id}) {p.nome} tem R$ {p.preco}</Text>
        });
    }

    return (
        <>
            <Text style={Estilo.txtG}>Lista de Produtos</Text>
            {obterLlista}
        </>
    );
}