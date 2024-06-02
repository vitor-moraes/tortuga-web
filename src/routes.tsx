import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Landing = lazy(() => import("./screens/Landing"));
const Habits = lazy(() => import("./screens/Habits"));
const User = lazy(() => import("./screens/User"));
const NotFound = lazy(() => import("./screens/NotFound"));

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/habits" element={<Habits />} />
      <Route path="/user" element={<User />} />
      <Route element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
