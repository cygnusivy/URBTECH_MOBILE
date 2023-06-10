import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useContext } from "react";
import { Container } from "./styled";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import MenuButtons from "../../components/MenuButtons";
import { UserContext } from "../../contexts/UserContext";

const ICONSIZE = 38;

export default function Menu({ navigation }) {
  const { handleLogout } = useContext(UserContext);

  const showLogoutAlert = () => {
    Alert.alert(
      "Sair",
      "Ao clicar em sair sua conta será desconectada deste aparelho.",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Ação de Cancelar Pressionada"),
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => logout(),
        },
      ],
      { cancelable: false }
    );
  };

  const logout = () => {
    const response = handleLogout();
    if (response === "Success") {
      navigation.navigate("Login");
    } else {
      console.log("fodeu");
    }
  };

  return (
    <Container>
      <MenuButtons title={"Comunidade"} />
      <MenuButtons title={"Informações"} />
      <MenuButtons title={"Configurações"} />
      <MenuButtons title={"Ajuda"} />
      <MenuButtons title={"Sair"} logout={() => showLogoutAlert()} />
    </Container>
  );
}
