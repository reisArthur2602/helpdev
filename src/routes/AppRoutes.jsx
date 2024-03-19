import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
    </Routes>
  );
};
