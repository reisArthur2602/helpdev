import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Order, SignIn, SignOut } from '../pages';
import { Private } from './Private';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignOut />} />

    
        <Route path="/order" element={<Private><Order/></Private>} />
     

      <Route path="*" element={<SignIn />} />
    </Routes>
  );
};
