import React, { createContext, useContext } from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TUserContext = {
  loginUser(email: string, senha: string): any;
  registerUser(nome: string, email: string, senha: string, senha2: string): any;
};

export const UserContext = createContext<TUserContext>({
  loginUser: () => {},
  registerUser: () => {},
});

export function UserProvider({ children }: any) {
  const loginUser = async (email: string, senha: string) => {
    try {
      const response = await api.post("/login/loginUsuario", {
        email,
        senha,
      });

      if (response.status === 201) {
        const userData = {
          email: response.data.email,
          idUser: response.data.idUser,
        };

        await AsyncStorage.setItem("userData", JSON.stringify(userData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (
    nome: string,
    email: string,
    senha: string,
    senha2: string
  ) => {
    try {
      const response = await api.post("/usuario", {
        nome: nome,
        email: email,
        senha: senha,
        senha2: senha2,
      });
      return response.data.status; // Dados de resposta da API
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
