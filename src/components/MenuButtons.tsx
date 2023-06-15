import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import {
  FontAwesome,
  MaterialIcons,
  Octicons,
  Ionicons,
} from "@expo/vector-icons";

type Props = {
  title: string;
  logout?: () => any;
  onPress?: () => any;
};

const ICONSIZE = 38;

export default function MenuButtons({ title, logout, onPress }: Props) {
  const icon = (title: string) => {
    if (title === "Comunidade") {
      return <FontAwesome name="group" size={24} color="black" />;
    } else if (title === "Informações") {
      return <Octicons name="info" size={24} color="black" />;
    } else if (title === "Configurações") {
      return <Ionicons name="settings-sharp" size={24} color="black" />;
    } else if (title === "Ajuda") {
      return (
        <Ionicons name="ios-help-circle-outline" size={24} color="black" />
      );
    } else {
      return <Ionicons name="exit-outline" size={24} color="black" />;
    }
  };

  return (
    <TouchableOpacity
      onPress={() =>
        title == "Sair" ? logout() : title === "Comunidade" ? onPress() : null
      }
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
        {icon(title)}
        <Text style={{ color: "#383838", fontSize: 18 }}>{title}</Text>
      </View>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={ICONSIZE}
        color="#383838"
      />
    </TouchableOpacity>
  );
}
