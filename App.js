import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';


export default function App() {

 


  const [fonteCarregada] = useFonts({
    "interRegular":Inter_400Regular,
    "interBold":Inter_700Bold,
    "MontserratRegular":Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    

  });

  if(!fonteCarregada){
    return <AppLoading/>
  }
  
  return (
   
      <SafeAreaView>
      <StatusBar/>
      <Cesta {...mock}/>
      </SafeAreaView>
      
    
  );
}

