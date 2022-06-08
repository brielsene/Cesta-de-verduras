import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Texto from '../../../componentes/Texto';
import logo from '../../../../assets/logo.png';

export default function Detalhes(){
    return<>
     <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        
        <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente direto para cozinha</Texto>
        <Text style={estilos.preco}>R$40,00</Text>
    
    
    </>






    
}

const estilos = StyleSheet.create({
    nome:{
        color:"#464646",
        fontSize:26,
        lineHeight: 43,
        fontWeight: "bold",
        
        
        
        
    },
    
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
        
        
    
    },
    
    imagemFazenda:{
        width: 32,
        height:32
    },
    
    nomeFazenda: {
        fontSize: 26,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular",
    },
    descricao:{
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight:26,
        
        
    },
    preco:{
        color:"#1A9F87",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight:42,
        marginTop:8,
    },

    imagemNaninha:{
        
        width:60,
        height:42,
    }
        
    })