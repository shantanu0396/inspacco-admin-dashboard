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
import ViewServices from "./pages/ViewServicesPage";
import ViewSocity from "./pages/ViewSocityPage";
import ViewPartner from "./pages/ViewPartnerPage";
import Add_servicesdetails from "./Forms/Service_details";
import AddSociety from "./Forms/AddSociety";
import AddPartner from "./Forms/AddPartner";
import EditServiceForm from "./Forms/EditServiceForm";
import ViewTask from "./pages/viewTaskPage";
import AddTask from "./Forms/AddTask";
import Edit_socityData from "./pages/Edit_socityData"
import Add_socityMember from "./Forms/Socity_member";
import Kam from "./Forms/Kam";
import Add_NewSocietyMember from "./Forms/Add_socityMember";
import SocietyAmenities from "./Forms/Add_SocietyAmenities";
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
            <Route
              path="ViewServices"
              element={
                <ReqAuth>
                  < ViewServices></ ViewServices>
                </ReqAuth>
              }
            />

            <Route
              path="ViewSocity"
              element={
                <ReqAuth>
                  < ViewSocity></ ViewSocity>
                </ReqAuth>
              }
            />
            <Route
              path="ViewPartner"
              element={
                <ReqAuth>
                  < ViewPartner></ ViewPartner>
                </ReqAuth>
              }
            />

            <Route
              path="Add_servicesdetails"
              element={
                <ReqAuth>
                  < Add_servicesdetails></ Add_servicesdetails>
                </ReqAuth>
              }
            />
            <Route
              path="AddSociety"
              element={
                <ReqAuth>
                  < AddSociety></ AddSociety>
                </ReqAuth>
              }
            />
            <Route
              path="AddPartner"
              element={
                <ReqAuth>
                  < AddPartner></ AddPartner>
                </ReqAuth>
              }
            />
            <Route
              path="EditServiceForm/:id"
              element={
                <ReqAuth>
                  < EditServiceForm></ EditServiceForm>
                </ReqAuth>
              }
            />
            <Route
              path="ViewTask/:id"
              element={
                <ReqAuth>
                    <ViewTask />
                </ReqAuth>
              }
            />
            <Route
              path="AddTask"
              element={
                <ReqAuth>
                    <AddTask />
                </ReqAuth>
              }
            />
            <Route
              path="Edit_socityData/:id"
              element={
                <ReqAuth>
                    <Edit_socityData />
                </ReqAuth>
              }
            />
            <Route
              path="Add_socityMember"
              element={
                <ReqAuth>
                    <Add_socityMember />
                </ReqAuth>
              }
            />
            <Route
              path="Kam"
              element={
                <ReqAuth>
                    <Kam />
                </ReqAuth>
              }
            />
            <Route
              path="Add_NewSocietyMember"
              element={
                <ReqAuth>
                    <Add_NewSocietyMember />
                </ReqAuth>
              }
            />
            <Route
              path="SocietyAmenities"
              element={
                <ReqAuth>
                    <SocietyAmenities />
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
