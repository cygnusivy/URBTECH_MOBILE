import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import MapView, { Marker } from "react-native-maps";
import { Button, StyleSheet, View, Text } from "react-native";
import { stations, accidents, locations } from "../../localization";
import { Container, MenuButton } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetRefProps } from "../../components/BottomSheet";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Dropdown from "../../components/Dropdown";
type Location = {
  nome: string;
  latitude: number;
  longitude: number;
};
export default function Home({ navigation }) {
  const latitudeRecife = -8.05428;
  const longitudeRecife = -34.8813;
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const ref = useRef<BottomSheetRefProps>(null);
  const [location, setLocation] = useState<Location[]>(locations);
  const handleDropDownOpen = (value: number) => {
    if (value === 1) {
      setLocation(locations);
    } else if (value === 2) {
      setLocation(stations);
    } else if (value === 3) {
      setLocation(accidents);
    }
  };

  const onPress = useCallback((value?: boolean) => {
    const isActive = ref?.current?.isActive();
    //console.log(dropdownIsOpen);
    if (value) {
      ref?.current?.scrollTo(-500);
      return;
    }
    ref?.current?.scrollTo(-200);
  }, []);
  useEffect(() => {
    onPress();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#161B31" }}>
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

        <BottomSheet ref={ref}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#161B31",
              // alignItems: "center",
            }}
          >
            <Dropdown
              changeValue={handleDropDownOpen}
              isOpen={(value: boolean) => onPress(value)}
            />
          </View>
        </BottomSheet>

        {/* <Button onPress={trocar} title="Switch" /> */}
        <MenuButton onPress={() => navigation.navigate("Menu")}>
          <Ionicons name="menu" size={48} color="#FFF" />
        </MenuButton>
      </Container>
    </GestureHandlerRootView>
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
