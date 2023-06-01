import React, { createContext, useContext } from "react";

type TUserContext = {
  loginUser(email: string, password: string): any;
};

export const UserContext = createContext<TUserContext>({
  loginUser: () => {},
});

export function UserProvider({ children }: any) {
  const loginUser = async () => {};

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
