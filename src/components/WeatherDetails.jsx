import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WeatherDetails = () => {
  return (
    <View style={styles.container}>
        {/* Wind */}
        <View style={styles.item} >
            <Text style={styles.itemtexttitle}>
                Wind
            </Text>
            <Text style={styles.itemtextsub}>
                33 m/h
            </Text>
        </View>
        {/* Humidity */}
        <View style={styles.item} >
            <Text style={styles.itemtexttitle}>
                Humidity
            </Text>
            <Text style={styles.itemtextsub}>
                23 km
            </Text>
        </View>
        {/* Vivibility */}
        <View style={styles.item} >
            <Text style={styles.itemtexttitle}>
                Vivibility
            </Text>
            <Text style={styles.itemtextsub}>
                64%
            </Text>
        </View>
    </View>
  )
}

export default WeatherDetails

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 130,
        borderRadius: 15,
        width: '95%',
        alignSelf: 'center'
    },
    item: {
        paddingTop: 5,
        justifyContent: 'center'
    },
    itemtexttitle: {
        fontSize: 17,
        fontWeight: '400',
        color: '#1d1d1d'
    },
    itemtextsub: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})