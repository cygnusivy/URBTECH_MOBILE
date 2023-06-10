import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { Container, MenuButton } from "./styled";
import { Ionicons } from "@expo/vector-icons";
export default function Home({ navigation }) {
  const latitudeRecife = -8.05428;
  const longitudeRecife = -34.8813;
  const locations = [
    { title: "Recife", latitude: -8.05428, longitude: -34.8813 },
    { title: "São Paulo", latitude: -23.5505, longitude: -46.6333 },
  ];

  return (
    <Container>
      <MapView
        initialRegion={{
          latitude: latitudeRecife,
          longitude: longitudeRecife,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ flex: 1 }}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.title}
          />
        ))}
      </MapView>
      <MenuButton onPress={() => navigation.navigate("Menu")}>
        <Ionicons name="menu" size={48} color="#FFF" />
      </MenuButton>
    </Container>
  );
}
