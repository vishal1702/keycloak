import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./helpers/PrivateRoute";

function App() {
 return (
   <div>
     <ReactKeycloakProvider authClient={keycloak}>
       <Navbar />
       <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<Home />} />
           <Route
             path="/secured"
             element={
               <PrivateRoute>
                 <SecuredPage />
               </PrivateRoute>
             }
           />
         </Routes>
       </BrowserRouter>
     </ReactKeycloakProvider>
   </div>
 );
}

export default App;