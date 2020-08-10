import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';
// importando do o elemento de loading para que seja mostrado até que
// as fontes estejam carregadas

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        {/* // View seria o msm dos blocos de divs, header,..
      // tudo o que for um texto será um text
      // Por padrão reactnative não funciona no svg
      // lembrar do conceito de densidade de pixel nas imagens */}
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#333',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// // todos elementos por padrão tem display
//   title:{
//     fontSize:32,
//     color:'#FFF',
//     fontWeight: 'bold'
//   }
// });
