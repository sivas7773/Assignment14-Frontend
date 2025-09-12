import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Resiger from "./Pages/Resiger";
import Home from "./Pages/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Resiger />} />
      <Route
        path="/home"
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default App;
