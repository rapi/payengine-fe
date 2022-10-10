import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "./components/SignIn/SignIn";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { SignUp } from "./components/SignUp/SignUp";

export const App = () => {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};
