import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
// import { FAB } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import styles from "./styles";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
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
  const isFocused = useIsFocused();
  const [imageUrls, setImageUrls] = useState<Post[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  // const handleFABPress = () => {
  //   navigation.navigate('Postagem');
  // };

  async function fetchPostagens() {
    try {
      const response = await axios.get(
        "https://urbtech-app.herokuapp.com/comunidade/selecionaPostagensDaComunidade/1"
      );
      setImageUrls(response.data);
    } catch (error) {
      console.error("Ocorreu um erro ao buscar as postagens:", error);
    }
  }
  useEffect(() => {
    fetchPostagens();
    console.log(imageUrls);
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
        <TouchableOpacity
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
        <FlatList
          data={imageUrls}
          renderItem={(data) => (
            <Image style={styles.image} source={{ uri: data.item.imgUrl }} />
          )}
        />
      </SafeAreaView>

      {/* <FAB
        onPress={handleFABPress}
        style={styles.fab}
        small={false}
        icon={({ size }) => (
          <Icon style={{ alignSelf: 'center' }} name="plus" size={size} color="#F3FCE7" />
        )}
        theme={{ colors: { accent: '#F3FCE7' } }}
      /> */}
    </View>
  );
}

export default Community;
