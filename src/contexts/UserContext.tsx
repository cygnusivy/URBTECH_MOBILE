import React, { createContext, useContext } from "react";
import { api } from "../services/api";

type TUserContext = {
  loginUser(email: string, password: string): any;
};

export const UserContext = createContext<TUserContext>({
  loginUser: () => {},
});

export function UserProvider({ children }: any) {
  const loginUser = async (email: string, password: string) => {
    const response = await api
      .get("", {
        params: {
          email: email,
          password: password,
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
