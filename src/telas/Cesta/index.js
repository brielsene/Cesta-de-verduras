import React from 'react';
import{ StyleSheet, Image, Dimensions, Text, View } from 'react-native';
import NewText from '../../componentes/Texto';



import Texto from '../../componentes/Texto';
import Topo from'./componentes/Topo';
import Detalhes from './componentes/Detalhes';









export default function Cesta(){
    return<>
    
    <Topo />
    
    
  
    <View style={estilos.cesta}>
    <Detalhes/>
       
    </View>
    </>
                
}

const estilos = StyleSheet.create({
 

cesta:{
    paddingVertical: 8,
    paddingHorizontal: 16
},



});