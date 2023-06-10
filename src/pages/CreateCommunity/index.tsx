import { View, Image, Text, TextInput } from "react-native";
import React, { useState } from "react";

export default function CreatePost({ navigation }) {
  const [imgPost, setImgPost] = useState("");

  return (
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
        <Image style={{}} source={{ uri: imgPost }} />
      )}
      <TextInput
        placeholder="Faça um comentario"
        style={{ width: "90%", height: 30, borderWidth: 1 }}
      />
    </View>
  );
}
