import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import React from "react";
import Community from "../pages/Community";
import StackRoutes from "./stack.routes";
import Profile from "../pages/Profile";

const TabBarIconSize = 36;
export default function AuthRoute() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return <Entypo name="home" size={TabBarIconSize} color={color} />;
            } else if (route.name === "Community") {
              return (
                <FontAwesome name="group" size={TabBarIconSize} color={color} />
              );
            } else {
              return (
                <FontAwesome name="user" size={TabBarIconSize} color={color} />
              );
            }
          },

          tabBarActiveTintColor: "#98C065",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            top: -12,
          },
          tabBarStyle: {
            backgroundColor: "#161B31",
            height: 80,
          },
        })}
      >
        <Tab.Screen name="Home" component={StackRoutes} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#15202B",
    height: 1200,
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarBackground: {
    backgroundColor: "#15202B",
  },
});
