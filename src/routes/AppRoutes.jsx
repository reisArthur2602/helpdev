import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { SignIn, SignOut } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignOut/>} />
    </Routes>
  );
};
