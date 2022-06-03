import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import Cesta from './src/telas/Cesta';


export default function App() {

 


  const [fonteCarregada] = useFonts({
    "interRegular":Inter_400Regular,
    "interBold":Inter_700Bold,
    "MontserratRegular":Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    

  });

  if(!fonteCarregada){
    return <View/>
  }
  
  return (
   
      <SafeAreaView>
      <StatusBar/>
      <Cesta/>
      </SafeAreaView>
      
    
  );
}

