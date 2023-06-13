import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Keyboard,
} from "react-native";
import React, { useContext, useState } from "react";
import Cam from "../../components/Camera";

import { UserContext } from "../../contexts/UserContext";
import { api } from "../../services/api";

export default function CreatePost({ navigation }) {
  const [imgPost, setImgPost] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [desc, setDesc] = useState<string>("");
  const { user } = useContext(UserContext);
  const handlePost = async () => {
    const id = user.id;
    try {
      const response = await api.post(
        "/post/postar",
        {
          imgUrl: imgPost,
          idUsuario: id,
          descricao: desc,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      ToastAndroid.show("Postagem Realizada!", ToastAndroid.SHORT);
      setDesc("");
      setImgPost("");
      Keyboard.dismiss();
    } catch (error) {
      ToastAndroid.show("Não foi possível postar!", ToastAndroid.SHORT);
      console.error("Ocorreu um erro:", error);
    }
  };

  return (
    <>
      {open ? (
        <Cam
          closed={() => setOpen(false)}
          setUriPhoto={(value: string) => setImgPost(value)}
        />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "#F3FCE7",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {imgPost === "" ? (
            <View
              style={{
                width: "70%",
                height: "50%",
                borderRadius: 8,
                borderWidth: 0.5,
                borderColor: "#323232",
                alignItems: "center",

                justifyContent: "center",
              }}
            >
              <Text>Sua imagem ficará aqui</Text>
            </View>
          ) : (
            <Image
              style={{ width: "70%", height: "50%", borderRadius: 8 }}
              source={{ uri: imgPost }}
            />
          )}
          <TextInput
            value={desc}
            onChangeText={(text) => setDesc(text)}
            placeholder="Faça um comentario"
            style={{
              width: "90%",
              marginTop: 32,
              height: 60,
              borderWidth: 0.5,
              paddingLeft: 10,
              borderRadius: 8,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 32,
              marginTop: 32,
            }}
          >
            <TouchableOpacity
              onPress={() => setOpen(!open)}
              style={{
                width: 140,
                height: 40,
                elevation: 10,
                backgroundColor: "#161B31",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 12,
              }}
            >
              <Text style={{ color: "#98C065", fontWeight: "600" }}>
                Carregar Foto
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handlePost}
              style={{
                width: 140,
                height: 40,
                elevation: 10,
                backgroundColor: "#98C065",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 12,
              }}
            >
              <Text style={{ color: "#161B31", fontWeight: "600" }}>
                Publicar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
