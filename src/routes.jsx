import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import LoginCliente from "./pages/auth/login/login-cliente";
import LoginColaborador from "./pages/auth/login/login-colaborador";
import RegistroCliente from "./pages/auth/register/client-register";
import RegistroColaborador from "./pages/auth/register/colaborator-register";
import Chat from "./pages/chat";

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
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;