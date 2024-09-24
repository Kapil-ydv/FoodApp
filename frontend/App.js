import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/Screen/Login'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
const App = () => {
  return (
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  )
}

export default App