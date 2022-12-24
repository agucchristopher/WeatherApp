import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, Entypo } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
            <View style={{
                backgroundColor: 'white',
                width: '20%'
            }}>
                <Ionicons name='menu-sharp' size={25} />
            </View>
            <View style={{
                backgroundColor: 'white',
                width: '80%',
                flexDirection:'row'
            }}>
                <Text style={{flexDirection:'row', fontWeight:'700', fontSize: 18}}>Benin, </Text>
                <Text style={{fontSize: 18}}>Nigeria</Text>
                <Entypo name='location-pin' style={{paddingTop: 3}} size={25} />
            </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:"space-between",
        padding: 8,
        backgroundColor: 'white'
    }
})