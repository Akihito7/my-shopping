import { NativeBaseProvider, Text, VStack } from 'native-base';
import React from 'react';
import { THEME } from './src/theme';
import { Routes } from './src/routes';


export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Routes />
    </NativeBaseProvider>
  );
}

