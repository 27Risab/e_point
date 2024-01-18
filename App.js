import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import LoginScreen from './src/screens/Login/loginScreen';
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded]=useFonts({
    'outfit-regular':require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-bold':require('./assets/fonts/Outfit-Bold.ttf'),

  
  })

  const onLayoutRootView=useCallback(async ()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  // const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Pre-load fonts, make any API calls you need to do here
  //       await Font.loadAsync(Entypo.font);
  //       // Artificially delay for two seconds to simulate a slow loading
  //       // experience. Please remove this if you copy and paste the code!
  //       await new Promise(resolve => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady) {
  //   return null;
  // }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* <Text>E App</Text> */}
      <StatusBar style="auto" />
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
