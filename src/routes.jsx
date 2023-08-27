import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import LoginCliente from "./pages/auth/login/login-cliente";
import LoginColaborador from "./pages/auth/login/login-colaborador";
import RegistroCliente from "./pages/auth/register/client-register";
import RegistroColaborador from "./pages/auth/register/colaborator-register";
import PerfilCliente from "./pages/profile/client";
import PerfilColaborador from "./pages/profile/colaborator";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/login/client" element={<LoginCliente />} />
            <Route path="/login/colaborator" element={<LoginColaborador />} />
            <Route path="/register/client" element={<RegistroCliente />} />
            <Route path="/register/colaborator" element={<RegistroColaborador />} />
            <Route path="/profile/client" element={<PerfilCliente />} />
            <Route path="/profile/colaborator" element={<PerfilColaborador />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;