import React from "react";
import { StatusBar } from "react-native";
import NoAuthRoutes from "./src/routes/noauth.routes";
import { UserProvider } from "./src/contexts/UserContext";
import AuthRoute from "./src/routes/tab.routes";

export default function App() {
  return (
    <>
      <UserProvider>
        <StatusBar backgroundColor={"#161B31"} barStyle="light-content" />
        <NoAuthRoutes />
      </UserProvider>
    </>
  );
}
