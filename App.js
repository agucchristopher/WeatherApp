import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Stack from './src/navigation/Stack'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})