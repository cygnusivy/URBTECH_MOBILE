import React, { useState, useCallback, useMemo, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { Button, StyleSheet, View, Text } from "react-native";
import { stations, accidents, locations } from "../../localization";
import { Container, MenuButton } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
type Location = {
  nome: string;
  latitude: number;
  longitude: number;
};
export default function Home({ navigation }) {
  const latitudeRecife = -8.05428;
  const longitudeRecife = -34.8813;
  const [isOpen, setIsOpen] = useState<boolean>(true);
  //////////////////////////
  const SheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);
  const handleSheetChange = useCallback((index: number) => {
    console.log("aa");
    handleSnapPress(index + 1);
  }, []);
  ////////////////////////////
  const handleSnapPress = useCallback((index) => {
    SheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    SheetRef.current?.close();
  }, []);
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
      <BottomSheet
        onChange={handleSheetChange}
        ref={SheetRef}
        enablePanDownToClose
        snapPoints={snapPoints}
      >
        <BottomSheetView>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
      {/* <Button onPress={trocar} title="Switch" /> */}
      <MenuButton onPress={() => navigation.navigate("Menu")}>
        <Ionicons name="menu" size={48} color="#FFF" />
      </MenuButton>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    alignItems: "center",
  },
});
