import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/registro";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;