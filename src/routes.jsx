import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import LoginCliente from "./pages/auth/login/login-cliente";
import LoginColaborador from "./pages/auth/login/login-colaborador";
import RegistroCliente from "./pages/auth/registro-cliente";
import RegistroColaborador from "./pages/auth/registro-colaborador";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/login/cliente" element={<LoginCliente />} />
            <Route path="/login/colaborador" element={<LoginColaborador />} />
            <Route path="/register/cliente" element={<RegistroCliente />} />
            <Route path="/register/colaborador" element={<RegistroColaborador />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;