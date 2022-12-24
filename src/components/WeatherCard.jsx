import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const WeatherCard = () => {
  return (
    <View style={{flexDirection:'row', alignContent:'center', marginTop:'auto'}}>
      <Ionicons name="cloud" size={60} />
      <Text>WeatherCard</Text>
    </View>
  )
}

export default WeatherCard

const styles = StyleSheet.create({})