import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Habits from "./pages/Habits";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Habits />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
