import React from "react";
import { StatusBar } from "react-native";
import NoAuthRoutes from "./src/routes/noauth.routes";
import { UserProvider } from "./src/contexts/UserContext";

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
