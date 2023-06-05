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
};

export const UserContext = createContext<TUserContext>({
  loginUser: async () => {},
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

  const loginUser = async (email: string, senha: string): Promise<void> => {
    try {
      const response = await api
        .post("/login/loginUsuario", {
          email,
          senha,
        })
        .then(async (res) => {
          if (res.status === 201) {
            console.log();
            const responseDataUser = await api
              .get(`/usuario/retornoUsuario/${res.data.idUser}`)
              .then((res) =>
                setUser({
                  id: res.data.id,
                  nome: res.data.nome,
                  email: res.data.email,
                  imgUrl: res.data.imgUrl,
                  descricao: res.data.descricao,
                  localizacao: res.data.localizacao,
                  site: res.data.site,
                  nascimento: res.data.nascimento,
                })
              )
              .then((test) => console.log())
              .catch((e) => console.log(e));
          }
        });
    } catch (error) {
      console.log(error);
    }
    console.log(user);
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
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
