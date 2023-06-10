import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import React from "react";
import Community from "../pages/Community";
import StackRoutes from "./stack.routes";
import Profile from "../pages/Profile";

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
              return <Entypo name="home" size={size} color={color} />;
            } else if (route.name === "Community") {
              return <FontAwesome name="group" size={size} color={color} />;
            } else {
              return <FontAwesome name="user" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: "#98C065",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={StackRoutes} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
