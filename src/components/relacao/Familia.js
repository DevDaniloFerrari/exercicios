import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';

import Membro from './Membro';

export default props => {
    return (
        <>
            <Text>[Ínicio] Membros da Familia: </Text>
            {props.children}
            <Text>[Fim] Membros da Familia: </Text>
        </>
    );
}