import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import AuthRoute from "./tab.routes";
import NoAuthRoutes from "./noauth.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, View } from "react-native";

export default function Routes() {
  const [currentRoute, setCurrentRoute] = useState<boolean | null>(null);
  const { user } = useContext(UserContext);

  const isAuth = async () => {
    const res = await AsyncStorage.getItem("user");
    if (res !== null) {
      setCurrentRoute(true);
      return;
    }
    setCurrentRoute(false);
  };

  useEffect(() => {
    isAuth();
  }, [user]);

  return (
    <>
      {currentRoute === null ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#161B31",
          }}
        >
          <Image
            style={{ width: 190, height: 168 }}
            source={require("../assets/logogreen.png")}
          />
        </View>
      ) : !currentRoute ? (
        <AuthRoute />
      ) : (
        <NoAuthRoutes />
      )}
    </>
  );
}
