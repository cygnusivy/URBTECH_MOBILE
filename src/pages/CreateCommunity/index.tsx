import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Cam from "../../components/Camera";

export default function CreatePost({ navigation }) {
  const [imgPost, setImgPost] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {}, [imgPost]);
  const teste = (uri: string) => {
    console.log(uri);
    setImgPost(uri);
  };
  return (
    <>
      {open ? (
        <Cam
          closed={() => setOpen(false)}
          setUriPhoto={(value: string) => teste(value)}
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
