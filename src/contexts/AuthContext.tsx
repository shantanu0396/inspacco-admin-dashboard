import { Spin } from "antd";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../models/Auth";

export const AuthContext = createContext<CurrentUserContext>(
  {} as CurrentUserContext
);

type Props = {
  children: any;
};

export function AuthProvider({ children }: Props) {
  const navigate = useNavigate();
  const [auth, setAuth] = useState<CurrentUserContext>({
    set,
    clear,
  } as CurrentUserContext);
  const [loading, setLoading] = useState(true);

  function set(key: string, value: any) {
    setAuth((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
    if (key === "user" && value) {
      localStorage.setItem("currentUser", JSON.stringify(value));
    }
  }

  function clear() {
    setAuth({} as CurrentUserContext)
  }

  useEffect(() => {
    const auth = localStorage.getItem("currentUser");
    const authObj = auth ? JSON.parse(auth) : null;
    if (authObj) {
      setAuth((prevState) => {
        return {
          ...prevState,
          user: authObj,
        };
      });
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      {loading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}
