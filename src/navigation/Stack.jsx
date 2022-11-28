import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'

const Stack = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default Stack

const styles = StyleSheet.create({})