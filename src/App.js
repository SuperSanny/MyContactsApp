import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

const Applayout = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
