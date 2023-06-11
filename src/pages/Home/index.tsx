import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { Button, StyleSheet, View } from "react-native";
import { stations, accidents, locations } from "../../localization";
import { Container, MenuButton } from "./styled";
import { Ionicons } from "@expo/vector-icons";

type Location = {
  nome: string;
  latitude: number;
  longitude: number;
};
export default function Home({ navigation }) {
  const latitudeRecife = -8.05428;
  const longitudeRecife = -34.8813;

  const trocar = () => {
    setLocation(stations);
  };
  const [location, setLocation] = useState<Location[]>(locations);
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
        {location.map((location, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title={location.nome}
          />
        ))}
      </MapView>
      <Button onPress={trocar} title="Switch" />
      <MenuButton onPress={() => navigation.navigate("Menu")}>
        <Ionicons name="menu" size={48} color="#FFF" />
      </MenuButton>
    </Container>
  );
}
