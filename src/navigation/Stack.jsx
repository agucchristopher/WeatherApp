import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Tabs from './Tabs'

const Stack = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
        <Stack.Screen name='Home' component={Tabs} />
    </Stack.Navigator>
  )
}

export default Stack

const styles = StyleSheet.create({})