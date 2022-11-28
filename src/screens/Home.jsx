import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { countries } from "../data";
import { Header, WeatherCard, WeatherDetails } from '../components';
// import dotenv from 'dotenv'

const Home = () => {
const [allcountries, setcountries] = React.useState(countries);
React.useEffect(() => {
  console.log(process.env.X_RapidAPI_Host)
}, [])

    return (
    <ScrollView style={{ flex: 1, marginBottom: 0}}>
      <StatusBar backgroundColor={'white'}  barStyle='dark-content' />
       <Header />
       <WeatherCard />
       <WeatherDetails />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})