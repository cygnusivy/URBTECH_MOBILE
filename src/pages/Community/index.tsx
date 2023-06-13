import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

import { AntDesign } from "@expo/vector-icons";
import { api } from "../../services/api";
type Post = {
  descricao: string;
  id: string;
  imgUrl: string;
  imgUsuario: string;
  listComentarios: string[];
  nomeUsuario: string;
  qtdCurtidas: number;
};

function Community() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrls, setImageUrls] = useState<Post[]>([]);

  const [refreshing, setRefreshing] = useState<boolean>(false);

  async function fetchPostagens() {
    setLoading(true);
    try {
      const response = await api.get(
        "/comunidade/selecionaPostagensDaComunidade/1"
      );
      setImageUrls(response.data);
    } catch (error) {
      console.error("Ocorreu um erro ao buscar as postagens:", error);
    } finally {
      setLoading(false);
    }
  }
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await fetchPostagens();
    } catch (error) {
      console.error("Ocorreu um erro ao buscar as postagens:", error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchPostagens();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container2}>
        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Text style={styles.text}>#dicasdeBike</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>#trilhas</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>#pedalando</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>#healthyactivelifestyle</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>#bikelifestyle</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {loading ? (
            <View style={{ justifyContent: "center", flex: 1 }}>
              <ActivityIndicator size={44} color={"#323232"} />
            </View>
          ) : (
            <FlatList
              data={imageUrls}
              renderItem={(data) => (
                <View style={{ justifyContent: "flex-end" }}>
                  <Image
                    style={styles.image}
                    source={{ uri: data.item.imgUrl }}
                  />
                  <View
                    style={{
                      alignSelf: "center",
                      alignItems: "center",
                      paddingLeft: 10,
                      position: "absolute",
                      width: "90%",
                      height: 50,
                      backgroundColor: "#FFF",
                      opacity: 0.8,
                      borderRadius: 8,
                      bottom: 16,
                      gap: 8,
                      flexDirection: "row",
                    }}
                  >
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 30 / 2,
                      }}
                      source={{
                        uri: data.item.imgUsuario,
                      }}
                    />
                    <Text style={{ fontWeight: "bold" }}>
                      {data.item.nomeUsuario}:
                    </Text>
                    <Text>{data.item.descricao}</Text>
                  </View>
                </View>
              )}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          )}
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreatePost")}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            margin: 16,
            zIndex: 99999,
          }}
        >
          <AntDesign name="pluscircle" size={62} color="#161B31" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

export default Community;
