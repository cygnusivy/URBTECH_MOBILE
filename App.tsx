import React from "react";
import { StatusBar } from "react-native";

import { UserProvider } from "./src/contexts/UserContext";

import Routes from "./src/routes/routes";

export default function App() {
  return (
    <>
      <UserProvider>
        <StatusBar backgroundColor={"#161B31"} barStyle="light-content" />
        <Routes />
      </UserProvider>
    </>
  );
}
