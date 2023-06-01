import React from "react";
import { StatusBar } from "react-native";
import NoAuthRoutes from "./src/routes/noauth.routes";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={"#161B31"} barStyle="light-content" />
      <NoAuthRoutes />
    </>
  );
}
