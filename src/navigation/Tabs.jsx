import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderRadius: 25,
          top: -5,
          width: "85%",
          alignSelf: "center",
          height: 55,
          elevation: 2,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Root"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign
                name="home"
                size={focused ? 35 : 30}
                color={focused ? "#ff7955" : "grey"}
              />
            ) : (
              <AntDesign
                name="home"
                size={focused ? 35 : 30}
                color={focused ? "#ff7955" : "grey"}
              />
            ),
        }}
      />
      {/* <Tab.Screen 
        name='Location' 
        component={Home}
        options={{
            tabBarIcon : ({focused}) => <Ionicons name={focused ? 'location' : 'location-outline'} size={ focused ? 35 : 30} color={focused ? '#ff7955' : 'grey'} />
        }}
        /> */}
      <Tab.Screen
        name="Notification"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              size={focused ? 35 : 30}
              color={focused ? "#ff7955" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="add"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={focused ? 35 : 30}
              color={focused ? "#ff7955" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="user"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={focused ? 35 : 30}
              color={focused ? "#ff7955" : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
