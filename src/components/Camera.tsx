import { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import * as FileSystem from "expo-file-system";
export default function Cam({ closed, setUriPhoto }: any) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const convertToPNG = async (photo: any) => {
    const currentDateTime = new Date();

    const min = 100000; // Menor valor possível (inclusivo)
    const max = 999999; // Maior valor possível (inclusivo)

    const name = Math.floor(Math.random() * (max - min + 1)) + min;

    const pngURI = FileSystem.cacheDirectory + `${name}.png`;
    await FileSystem.moveAsync({
      from: photo.uri,
      to: pngURI,
    });
    return { ...photo, uri: pngURI };
  };
  const takePhoto = async () => {
    setUriPhoto("");
    if (cameraRef.current) {
      const options = { quality: 0.1 };
      const photo = await cameraRef.current.takePictureAsync(options);
      const pngPhoto = await convertToPNG(photo);

      isClosed();
      setUriPhoto(pngPhoto.uri);
    }
  };
  const isClosed = () => {
    closed(false);
  };

  return (
    <>
      <Camera
        style={{
          flex: 1,
          position: "absolute",
          zIndex: 999,
          width: "100%",
          height: "100%",
        }}
        type={CameraType.back}
        ratio="16:9"
        ref={cameraRef}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginBottom: 50,
              alignItems: "center",
              flexDirection: "row-reverse",
              width: "60%",
              alignSelf: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={takePhoto}>
              <View
                style={{
                  width: 62,
                  height: 62,
                  borderRadius: 62 / 2,
                  borderWidth: 4,
                  borderColor: "#FFF",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 42 / 2,
                    backgroundColor: "#FFF",
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => closed(false)}>
              <AntDesign name="close" size={62} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </>
  );
}
