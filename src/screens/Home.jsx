import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { countries } from "../data";

const Home = () => {
const [allcountries, setcountries] = React.useState(countries)
    return (
    <View style={{ flex: 1}}>
        <Text>Countries</Text>
      <FlatList 
      data={allcountries} 
      keyExtractor={(item, index) => index} 
      showsVerticalScrollIndicator={false}
      onEndReached={()=> console.log('end')}
      renderItem={({item})=> (
        <View style={{flex: 1, margin: 8, elevation: 15, backgroundColor:'dodgerblue', height: 120}}>
            <Text style={{ fontSize: 25, margin: 5 }}>Country: {item.country}</Text>
            <Text style={{ fontSize: 25, margin: 5 }}>City: {item.city}</Text>
        </View>
  )}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})