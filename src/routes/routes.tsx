import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import AuthRoute from "./tab.routes";
import NoAuthRoutes from "./noauth.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, View } from "react-native";

export default function Routes() {
  const [currentRoute, setCurrentRoute] = useState<boolean | null>(null);
  const { user, isAuthenticated } = useContext(UserContext);

  const isAuth = async () => {
    const res = await AsyncStorage.getItem("user");
    const dataUser = JSON.parse(res);
    if (res !== null) {
      setCurrentRoute(true);
      await isAuthenticated(dataUser);
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
      ) : currentRoute ? (
        <AuthRoute />
      ) : (
        <NoAuthRoutes />
      )}
    </>
  );
}
