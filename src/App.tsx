import { ApolloProvider } from "@apollo/client";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "./components/ReqAuth";
import { AuthProvider } from "./contexts/AuthContext";
import client from "./graphqlClient";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RolesPage from "./pages/RolesPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <ReqAuth>
                <Home></Home>
              </ReqAuth>
            }
          >
            <Route
              path="users"
              element={
                <ReqAuth>
                  <UsersPage></UsersPage>
                </ReqAuth>
              }
            />
            <Route
              path="roles"
              element={
                <ReqAuth>
                  <RolesPage></RolesPage>
                </ReqAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
