import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as ImagePicker from "expo-image-picker";
export default function Profile({ navigation }) {
  const { user, updateDataUser } = useContext(UserContext);

  const handleSelectImage = async () => {
    let result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

    if (!result.canceled) {
      const updateResult = await updateDataUser({
        descricao: user.descricao,
        imgUrl: result.assets[0].uri,
        localizacao: user.localizacao,
        nascimento: user.nascimento,
        nome: user.nome,
        site: user.site,
        id: "",
        email: user.email,
      });
      console.log(updateResult);
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#161B31",
        flex: 1,
        alignItems: "flex-start",
        paddingHorizontal: 10,
        paddingTop: 32,
        gap: 12,
      }}
    >
      <Image
        source={{ uri: user.imgUrl }}
        style={{
          width: 173,
          height: 173,
          alignSelf: "center",
          borderRadius: 173 / 2,
          borderWidth: 6,
          borderColor: "#98C065",
        }}
      />
      <TouchableOpacity
        style={{
          alignSelf: "center",
          backgroundColor: "#DDD",
          padding: 8,
          borderRadius: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={handleSelectImage}
      >
        <Text>Selecionar imagem</Text>
      </TouchableOpacity>

      <ScrollView style={{ flex: 1, width: "100%", gap: 0 }}>
        <Text style={{ color: "#98C065", fontSize: 16, marginTop: 28 }}>
          Nome:
        </Text>
        <Text style={{ color: "white", fontSize: 18 }}>{user.nome}</Text>
        <View
          style={{ borderWidth: 0.5, width: "100%", borderColor: "#98C065" }}
        />
        <Text style={{ color: "#98C065", fontSize: 16, marginTop: 28 }}>
          Bio:
        </Text>
        <Text style={{ color: "white", fontSize: 18 }}>{user.descricao}</Text>
        <View
          style={{ borderWidth: 0.5, width: "100%", borderColor: "#98C065" }}
        />
        <Text style={{ color: "#98C065", fontSize: 16, marginTop: 28 }}>
          Localização:
        </Text>
        <Text style={{ color: "white", fontSize: 18 }}>{user.localizacao}</Text>
        <View
          style={{ borderWidth: 0.5, width: "100%", borderColor: "#98C065" }}
        />
        <Text style={{ color: "#98C065", fontSize: 16, marginTop: 28 }}>
          Data de Nascimento:
        </Text>
        <Text style={{ color: "white", fontSize: 18 }}>{user.nascimento}</Text>
        <View
          style={{ borderWidth: 0.5, width: "100%", borderColor: "#98C065" }}
        />
        <Text style={{ color: "#98C065", fontSize: 16, marginTop: 28 }}>
          Sites:
        </Text>
        <Text style={{ color: "white", fontSize: 18 }}>{user.site}</Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#DDD",
            width: 120,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
            alignSelf: "center",
          }}
        >
          <Text>Editar perfil</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
