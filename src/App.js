import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Familia from './components/relacao/Familia';
import Membro from './components/relacao/Membro';
// import ParImpar from './components/PaiImpar';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2';
// import Pai from './components/indireta/Pai';
// import Pai from './components/direta/Pai';
// import Contador from './components/Contador';
// import Botao from './components/Botao';
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio';
//import MinMax from './components/MinMax';
// import CompPadrao, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';

export default () => {
    return (
        <SafeAreaView style={style.App}>
            <Familia>
                <Membro nome="Bia" sobrenome="Arruda"></Membro>
                <Membro nome="Carlos" sobrenome="Arruda"></Membro>
            </Familia>
            <Familia>
                <Membro nome="Ana" sobrenome="Silva"></Membro>
                <Membro nome="Julia" sobrenome="Silva"></Membro>
            </Familia>
            {/*
            <ParImpar num={6}/>
            <Diferenciar />
            <ContadorV2 />
            <Pai />
            <Pai />
            <Contador inicial={100} passo={13}/>
            <Botao />
            <Titulo principal="Cadastro"
                secundario="Tela de cadastro do produto"/>
            <Aleatorio min={97} max={100} />
            <MinMax min="3" max="20"/>
            <MinMax min="1" max="94"/>
            <CompPadrao />
            <Comp1/>
            <Comp2/>
            <Primeiro/> */}
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
});