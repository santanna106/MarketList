import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import {ThemeProvider} from 'styled-components';
import {StatusBar} from 'react-native';

import {Routes} from './src/routes';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_700Bold

} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme'
import {AuthProvider, useAuth} from './src/hooks/auth';
import { TaskProvider,useTask } from './src/hooks/task';
import { HeaderProvider } from './src/hooks/header';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  const { userStoreIsLoading } = useAuth();
  const { taskStoreIsLoading } = useTask();

  if(!fontsLoaded || userStoreIsLoading || taskStoreIsLoading){
    return  <AppLoading />
  }

  return (  
    <GestureHandlerRootView style={{flex:1}}>
      <ThemeProvider theme={theme}>
          <StatusBar barStyle="dark-content"  backgroundColor={theme.colors.primary} />
          <AuthProvider>
            <TaskProvider>
              <HeaderProvider>
                <Routes />
              </HeaderProvider>
            </TaskProvider>
          </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}


