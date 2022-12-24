import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { countries } from "../data";
import { Header, WeatherCard, WeatherDetails } from "../components";
import { FontAwesome5 } from "@expo/vector-icons";
// import dotenv from 'dotenv'

const Home = () => {
  const permissions = [
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    PermissionsAndroid.PERMISSIONS.CAMERA,
    // PermissionsAndroid.PERMISSIONS.COARSE_LOCATION
  ];
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const getPermissions = async () => {
      const granted = await PermissionsAndroid.requestMultiple(permissions);
      const recordAudioGranted =
        granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === "granted";
      const cameraGranted =
        granted[PermissionsAndroid.PERMISSIONS.CAMERA] === "granted";
      // const locationGranted =
      // granted[PermissionsAndroid.PERMISSIONS.COARSE_LOCATION] === 'granted';
      if (!cameraGranted || !recordAudioGranted) {
        Alert.alert("Permissions not granted");
      } else {
        setPermissionGranted(true);
      }
    };

    if (Platform.OS === "android") {
      getPermissions();
    } else {
      setPermissionGranted(true);
    }
  }, []);

  return (
    <SafeAreaView>
      {["+", "-", "/", "*"].map((item) => (
        <View>
          <Text>{item}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
