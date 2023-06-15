import React, { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type TUser = {
  id: string;
  nome: string;
  email: string;
  imgUrl: string;
  descricao: string | null;
  localizacao: string | null;
  site: string | null;
  nascimento: string | null;
};

type TUserContext = {
  loginUser(email: string, senha: string): Promise<void>;
  registerUser(
    nome: string,
    email: string,
    senha: string,
    senha2: string
  ): Promise<any>;
  user: TUser;
  handleLogout(): any;
  isAuthenticated(data: TUser): any;
  updateDataUser(data: TUser): any;
};

export const UserContext = createContext<TUserContext>({
  loginUser: async () => {},
  updateDataUser: async () => {},
  isAuthenticated: async () => {},
  handleLogout: async () => {},
  registerUser: async () => {},
  user: {
    id: "",
    nome: "",
    email: "",
    imgUrl: "",
    descricao: null,
    localizacao: null,
    site: null,
    nascimento: null,
  },
});

export function UserProvider({ children }: any) {
  const [user, setUser] = useState<TUser>({
    id: "",
    nome: "",
    email: "",
    imgUrl: "",
    descricao: null,
    localizacao: null,
    site: null,
    nascimento: null,
  });

  const isAuthenticated = async (data: TUser) => {
    setUser({
      id: data.id,
      nome: data.nome,
      email: data.email,
      imgUrl: data.imgUrl,
      descricao: data.descricao,
      localizacao: data.localizacao,
      site: data.site,
      nascimento: data.nascimento,
    });
  };

  const loginUser = async (email: string, senha: string): Promise<any> => {
    try {
      const response = await api.post("/login/loginUsuario", { email, senha });

      if (response.status === 201) {
        const responseDataUser = await api.get(
          `/usuario/retornoUsuario/${response.data.idUser}`
        );

        await AsyncStorage.setItem(
          "user",
          JSON.stringify(responseDataUser.data)
        );

        setUser({
          id: responseDataUser.data.id,
          nome: responseDataUser.data.nome,
          email: responseDataUser.data.email,
          imgUrl: responseDataUser.data.imgUrl,
          descricao: responseDataUser.data.descricao,
          localizacao: responseDataUser.data.localizacao,
          site: responseDataUser.data.site,
          nascimento: responseDataUser.data.nascimento,
        });
        console.log(responseDataUser.data);
        return 201;
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
      return "Ocorreu um erro";
    }
  };

  const updateDataUser = async (data: TUser) => {
    console.log(data);
    const response = await api
      .put(`/usuario/atualizarUsuario/${user.id}`, {
        descricao: data.descricao,
        imgUrl: data.imgUrl,
        localizacao: data.localizacao,
        nascimento: data.nascimento,
        nome: data.nome,
        site: data.site,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const registerUser = async (
    nome: string,
    email: string,
    senha: string,
    senha2: string
  ): Promise<any> => {
    try {
      const response = await api.post("/usuario", {
        nome: nome,
        email: email,
        senha: senha,
        senha2: senha2,
      });

      return response.status; // Dados de resposta da API
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUser({
        id: "",
        nome: "",
        email: "",
        imgUrl: "",
        descricao: null,
        localizacao: null,
        site: null,
        nascimento: null,
      });
      return "Sucess";
    } catch (e) {
      return "Failed";
    }
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        registerUser,
        user,
        updateDataUser,
        handleLogout,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
