"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type UserContextType = {
  userName: string;
  login: (name: string) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userName, setUserName] = useState("");

  function login(name: string) {
    setUserName(name);
  }

  function logout() {
    setUserName("");
  }

  return (
    <UserContext.Provider value={{ userName, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser deve ser usado dentro de UserProvider");
  }

  return context;
}
